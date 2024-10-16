import { MeshDevice } from "../meshDevice.ts";
import * as Types from "../types.ts";
import { ByteLengthParser, SerialPort } from "serialport";
import { PacketExtractor } from "../utils/packetExtractor.ts";

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

  protected packetExtractor: PacketExtractor;

  /** Serial port used to communicate with device. */
  public port: SerialPort | undefined;

  constructor(configId?: number) {
    super(configId);

    this.log = this.log.getSubLogger({ name: "ElectronSerialConnection" });

    this.connType = "electron-serial";
    this.portId = "";
    this.port = undefined;
    this.packetExtractor = new PacketExtractor();

    this.log.debug(
      Types.Emitter[Types.Emitter.Constructor],
      "🔷 ElectronSerialConnection instantiated",
    );
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
        const parser = this.port.pipe(new ByteLengthParser({ length: 8 }));

        parser.on("data", (data) => {
          const packet = this.packetExtractor.tryExtractPacket(
            data,
            this.log,
            this.events.onDeviceDebugLog,
            false,
          );
          if (packet) {
            this.handleFromRadio(packet);
          }
        });

        this.log.info(
          Types.Emitter[Types.Emitter.Connect],
          `🔷 Connected to ${path}`,
        );

        this.configure().catch(() => {
          // TODO: FIX, workaround for `wantConfigId` not getting acks.
        });

        this.updateDeviceStatus(Types.DeviceStatusEnum.DeviceConnected);
      } else {
        this.log.error(
          Types.Emitter[Types.Emitter.Connect],
          "❌ Serial port not readable.",
        );
      }
    });

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

  /** Reconnects to the serial port */
  public async reconnect(): Promise<void> {
    await this.connect({
      path: this.portId,
      concurrentLogOutput: false,
    });
  }

  /** Disconnects from the serial port */
  public async disconnect(): Promise<SerialPort | undefined> {
    // -------
    this.port?.close();
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
