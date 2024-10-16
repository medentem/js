import type { SimpleEventDispatcher } from "ste-simple-events";
import type { Logger } from "tslog";
import { PacketExtractor } from "./packetExtractor.ts";

export const transformHandler = (
  log: Logger<unknown>,
  onReleaseEvent: SimpleEventDispatcher<boolean>,
  onDeviceDebugLog: SimpleEventDispatcher<Uint8Array>,
  concurrentLogOutput: boolean,
) => {
  const packetExtractor = new PacketExtractor();
  return new TransformStream<Uint8Array, Uint8Array>({
    transform(chunk: Uint8Array, controller): void {
      log = log.getSubLogger({ name: "streamTransformer" });
      onReleaseEvent.subscribe(() => {
        controller.terminate();
      });
      const packet = packetExtractor.tryExtractPacket(
        chunk,
        log,
        onDeviceDebugLog,
        concurrentLogOutput,
      );
      if (packet) {
        controller.enqueue(packet);
      }
    },
  });
};
