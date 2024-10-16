import * as Protobuf from "@meshtastic/protobufs";
import * as Types from "../types.ts";
import type { Logger } from "tslog";
import type { SimpleEventDispatcher } from "ste-simple-events";

export class PacketExtractor {
  protected byteBuffer: Uint8Array;

  constructor() {
    this.byteBuffer = new Uint8Array([]);
  }

  public tryExtractPacket(
    chunk: Uint8Array,
    log: Logger<unknown>,
    onDeviceDebugLog: SimpleEventDispatcher<Uint8Array>,
    concurrentLogOutput: boolean,
  ): Uint8Array | undefined {
    this.byteBuffer = new Uint8Array([...this.byteBuffer, ...chunk]);
    let processingExhausted = false;
    while (this.byteBuffer.length !== 0 && !processingExhausted) {
      const framingIndex = this.byteBuffer.findIndex((byte) => byte === 0x94);
      const framingByte2 = this.byteBuffer[framingIndex + 1];
      if (framingByte2 === 0xc3) {
        if (this.byteBuffer.subarray(0, framingIndex).length) {
          if (concurrentLogOutput) {
            onDeviceDebugLog.dispatch(
              this.byteBuffer.subarray(0, framingIndex),
            );
          } else {
            log.warn(
              Types.EmitterScope.SerialConnection,
              Types.Emitter.Connect,
              `⚠️ Found unneccesary message padding, removing: ${this.byteBuffer
                .subarray(0, framingIndex)
                .toString()}`,
            );
          }

          this.byteBuffer = this.byteBuffer.subarray(framingIndex);
        }

        const msb = this.byteBuffer[2];
        const lsb = this.byteBuffer[3];

        if (
          msb !== undefined &&
          lsb !== undefined &&
          this.byteBuffer.length >= 4 + (msb << 8) + lsb
        ) {
          const packet = this.byteBuffer.subarray(4, 4 + (msb << 8) + lsb);

          const malformedDetectorIndex = packet.findIndex(
            (byte) => byte === 0x94,
          );
          if (
            malformedDetectorIndex !== -1 &&
            packet[malformedDetectorIndex + 1] === 0xc3
          ) {
            log.warn(
              Types.EmitterScope.SerialConnection,
              Types.Emitter.Connect,
              `⚠️ Malformed packet found, discarding: ${this.byteBuffer
                .subarray(0, malformedDetectorIndex - 1)
                .toString()}`,
              Protobuf.Mesh.LogRecord_Level.WARNING,
            );

            this.byteBuffer = this.byteBuffer.subarray(malformedDetectorIndex);
          } else {
            this.byteBuffer = this.byteBuffer.subarray(
              3 + (msb << 8) + lsb + 1,
            );
            return packet;
          }
        } else {
          /** Only partial message in buffer, wait for the rest */
          processingExhausted = true;
        }
      } else {
        /** Message not complete, only 1 byte in buffer */
        processingExhausted = true;
      }
    }
    return undefined;
  }
}
