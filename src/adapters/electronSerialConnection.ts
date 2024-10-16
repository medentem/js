import { SimpleEventDispatcher } from "ste-simple-events";
import { MeshDevice } from "../meshDevice.ts";
import * as Types from "../types.ts";
import { transformHandler } from "../utils/index.ts";
import { ByteLengthParser, SerialPort } from "serialport";

export interface PortInfo {
  path: string;
  manufacturer: string | undefined;
  serialNumber: string | undefined;
  pnpId: string | undefined;
  locationId: string | undefined;
  productId: string | undefined;
  vendorId: string | undefined;
}

/** Allows to connect to a Meshtastic device over WebSerial */
export class ElectronSerialConnection extends MeshDevice {
  /** Defines the connection type as serial */
  public connType: Types.ConnectionTypeName;

  protected portId: string;

  /** Serial port used to communicate with device. */
  public port: SerialPort | undefined;

  private readerHack: ReadableStreamDefaultReader<Uint8Array> | undefined;
  private writerHack: WritableStreamDefaultWriter<Uint8Array> | undefined;

  /** Transform stream for parsing raw serial data */
  private transformer?: TransformStream<Uint8Array, Uint8Array>;

  /** Should locks be prevented */
  private preventLock?: boolean;

  /** Unfortunately, this is currently the only way to release the lock on a stream after piping it
   *  through a transform stream (https://stackoverflow.com/questions/71262432) */
  private pipePromise?: Promise<void>;

  /**
   * Fires when `disconnect()` is called, used to instruct serial port and
   * readers to release there locks
   *
   * @event onReleaseEvent
   */
  private readonly onReleaseEvent: SimpleEventDispatcher<boolean>;

  constructor(configId?: number) {
    super(configId);

    this.log = this.log.getSubLogger({ name: "ElectronSerialConnection" });

    this.connType = "electron-serial";
    this.portId = "";
    this.port = undefined;
    this.transformer = undefined;
    this.onReleaseEvent = new SimpleEventDispatcher<boolean>();
    this.preventLock = false;

    this.log.debug(
      Types.Emitter[Types.Emitter.Constructor],
      "🔷 ElectronSerialConnection instantiated",
    );
  }

  /**
   * Reads packets from transformed serial port steam and processes them.
   */
  private async readFromRadio(
    reader: ReadableStreamDefaultReader<Uint8Array>,
  ): Promise<void> {
    this.onReleaseEvent.subscribe(async () => {
      this.preventLock = true;
      await reader.cancel();
      await this.pipePromise?.catch(() => {});
      reader.releaseLock();
      await this.port?.close();
    });

    while (!this.preventLock) {
      await reader
        .read()
        .then(({ value }) => {
          if (value) {
            this.log.info(
              Types.Emitter[Types.Emitter.ReadFromRadio],
              `🔷 ${value}`,
            );
            this.handleFromRadio(value);
          }
        })
        .catch(() => {
          this.log.debug(
            Types.Emitter[Types.Emitter.ReadFromRadio],
            "Releasing reader",
          );
        });
    }
  }

  /** Gets list of serial ports that can be passed to `connect` */
  public async getPorts(): Promise<PortInfo[]> {
    return await SerialPort.list();
  }

  public getCurrentPort() {
    return this.port;
  }

  /**
   * Initiates the connect process to a Meshtastic device via Serial Port
   */
  public async connect({
    path,
    baudRate = 115200,
    concurrentLogOutput = false,
  }: Types.ElectronSerialConnectionParameters): Promise<void> {
    /** Set device state to connecting */
    this.updateDeviceStatus(Types.DeviceStatusEnum.DeviceConnecting);

    this.portId = path;

    /** Set device if specified, else request. */
    this.port = new SerialPort({
      path,
      baudRate,
      autoOpen: false,
    });

    /** Setup event listners */
    this.port.on("close", () => {
      this.log.info(
        Types.Emitter[Types.Emitter.Connect],
        "Device disconnected",
      );
      this.updateDeviceStatus(Types.DeviceStatusEnum.DeviceDisconnected);
      this.complete();
    });

    this.port.on("error", (err) => {
      this.log.error(Types.Emitter[Types.Emitter.Connect], `❌ ${err.message}`);
    });

    this.port.on("open", (err) => {
      if (err) {
        this.log.error(
          Types.Emitter[Types.Emitter.Connect],
          `❌ ${err.message}`,
        );
        return;
      }

      if (this.port?.readable) {
        const parser = this.port.pipe(new ByteLengthParser({ length: 64 }));

        this.transformer = transformHandler(
          this.log,
          this.onReleaseEvent,
          this.events.onDeviceDebugLog,
          concurrentLogOutput,
        );

        const writer = (this.writerHack =
          this.transformer?.writable.getWriter());
        const reader = (this.readerHack =
          this.transformer.readable.getReader());

        parser.on("data", (data) => {
          this.processDataStream(data, writer);
        });

        this.readFromRadio(reader);

        this.log.info(
          Types.Emitter[Types.Emitter.Connect],
          `🔷 Connected to ${path}`,
        );

        this.updateDeviceStatus(Types.DeviceStatusEnum.DeviceConnected);
      } else {
        this.log.error(
          Types.Emitter[Types.Emitter.Connect],
          "❌ Serial port not readable.",
        );
      }
    });

    this.preventLock = false;

    /** Connect to device */
    this.port.open((err) => {
      if (err) {
        this.log.error(
          Types.Emitter[Types.Emitter.Connect],
          "❌ Serial port failed to open.",
        );
      } else {
        this.log.info(
          Types.Emitter[Types.Emitter.Connect],
          `🔷 Port open to ${path}`,
        );
      }
    });
  }

  public async processDataStream(
    data: any,
    writer: WritableStreamDefaultWriter<Uint8Array> | undefined,
  ): Promise<void> {
    if (writer) {
      await writer.write(data);
      return;
    }
    this.log.error(
      Types.Emitter[Types.Emitter.Connect],
      "❌ No writer available.",
    );
  }

  /** Reconnects to the serial port */
  public async reconnect(): Promise<void> {
    await this.connect({
      path: this.portId,
      concurrentLogOutput: false,
    });
  }

  /** Disconnects from the serial port */
  public async disconnect(): Promise<SerialPort | undefined> {
    // this.onReleaseEvent.dispatch(true);
    // HACK: Inline onReleaseEvent
    // -- This should be used as an event, like intened
    this.preventLock = true;
    await this.readerHack?.cancel();
    await this.writerHack?.abort();
    await this.pipePromise?.catch(() => {});
    this.readerHack?.releaseLock();
    if (this.port?.readable) {
      await this.port?.close();
    }
    // -------
    this.updateDeviceStatus(Types.DeviceStatusEnum.DeviceDisconnected);
    this.complete();
    // await this.onReleaseEvent.toPromise();
    return this.port;
  }

  /** Pings device to check if it is avaliable */
  public async ping(): Promise<boolean> {
    return await Promise.resolve(true);
  }

  /**
   * Sends supplied protobuf message to the radio
   */
  protected async writeToRadio(data: Uint8Array): Promise<void> {
    await this.port?.write(
      new Uint8Array([0x94, 0xc3, 0x00, data.length, ...data]),
    );
  }
}
