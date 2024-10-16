var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/constants.ts
var ToRadioUuid = "f75c76d2-129e-4dad-a1dd-7866124401e7";
var FromRadioUuid = "2c55e69e-4993-11ed-b878-0242ac120002";
var FromNumUuid = "ed9da18c-a800-4f66-a670-aa7547e34453";
var ServiceUuid = "6ba1b218-15a8-461f-9fa8-5dcae273eafd";
var broadcastNum = 4294967295;
var minFwVer = 2.2;
var Constants = {
  ToRadioUuid,
  FromRadioUuid,
  FromNumUuid,
  ServiceUuid,
  broadcastNum,
  minFwVer
};

// src/meshDevice.ts
import { Logger } from "tslog";
import * as Protobuf4 from "@meshtastic/protobufs";

// src/types.ts
var types_exports = {};
__export(types_exports, {
  ChannelNumber: () => ChannelNumber,
  DeviceStatusEnum: () => DeviceStatusEnum,
  Emitter: () => Emitter,
  EmitterScope: () => EmitterScope
});
var DeviceStatusEnum = /* @__PURE__ */ ((DeviceStatusEnum2) => {
  DeviceStatusEnum2[DeviceStatusEnum2["DeviceRestarting"] = 1] = "DeviceRestarting";
  DeviceStatusEnum2[DeviceStatusEnum2["DeviceDisconnected"] = 2] = "DeviceDisconnected";
  DeviceStatusEnum2[DeviceStatusEnum2["DeviceConnecting"] = 3] = "DeviceConnecting";
  DeviceStatusEnum2[DeviceStatusEnum2["DeviceReconnecting"] = 4] = "DeviceReconnecting";
  DeviceStatusEnum2[DeviceStatusEnum2["DeviceConnected"] = 5] = "DeviceConnected";
  DeviceStatusEnum2[DeviceStatusEnum2["DeviceConfiguring"] = 6] = "DeviceConfiguring";
  DeviceStatusEnum2[DeviceStatusEnum2["DeviceConfigured"] = 7] = "DeviceConfigured";
  return DeviceStatusEnum2;
})(DeviceStatusEnum || {});
var EmitterScope = /* @__PURE__ */ ((EmitterScope2) => {
  EmitterScope2[EmitterScope2["MeshDevice"] = 1] = "MeshDevice";
  EmitterScope2[EmitterScope2["SerialConnection"] = 2] = "SerialConnection";
  EmitterScope2[EmitterScope2["NodeSerialConnection"] = 3] = "NodeSerialConnection";
  EmitterScope2[EmitterScope2["BleConnection"] = 4] = "BleConnection";
  EmitterScope2[EmitterScope2["HttpConnection"] = 5] = "HttpConnection";
  return EmitterScope2;
})(EmitterScope || {});
var Emitter = /* @__PURE__ */ ((Emitter2) => {
  Emitter2[Emitter2["Constructor"] = 0] = "Constructor";
  Emitter2[Emitter2["SendText"] = 1] = "SendText";
  Emitter2[Emitter2["SendWaypoint"] = 2] = "SendWaypoint";
  Emitter2[Emitter2["SendPacket"] = 3] = "SendPacket";
  Emitter2[Emitter2["SendRaw"] = 4] = "SendRaw";
  Emitter2[Emitter2["SetConfig"] = 5] = "SetConfig";
  Emitter2[Emitter2["SetModuleConfig"] = 6] = "SetModuleConfig";
  Emitter2[Emitter2["ConfirmSetConfig"] = 7] = "ConfirmSetConfig";
  Emitter2[Emitter2["SetOwner"] = 8] = "SetOwner";
  Emitter2[Emitter2["SetChannel"] = 9] = "SetChannel";
  Emitter2[Emitter2["ConfirmSetChannel"] = 10] = "ConfirmSetChannel";
  Emitter2[Emitter2["ClearChannel"] = 11] = "ClearChannel";
  Emitter2[Emitter2["GetChannel"] = 12] = "GetChannel";
  Emitter2[Emitter2["GetAllChannels"] = 13] = "GetAllChannels";
  Emitter2[Emitter2["GetConfig"] = 14] = "GetConfig";
  Emitter2[Emitter2["GetModuleConfig"] = 15] = "GetModuleConfig";
  Emitter2[Emitter2["GetOwner"] = 16] = "GetOwner";
  Emitter2[Emitter2["Configure"] = 17] = "Configure";
  Emitter2[Emitter2["HandleFromRadio"] = 18] = "HandleFromRadio";
  Emitter2[Emitter2["HandleMeshPacket"] = 19] = "HandleMeshPacket";
  Emitter2[Emitter2["Connect"] = 20] = "Connect";
  Emitter2[Emitter2["Ping"] = 21] = "Ping";
  Emitter2[Emitter2["ReadFromRadio"] = 22] = "ReadFromRadio";
  Emitter2[Emitter2["WriteToRadio"] = 23] = "WriteToRadio";
  Emitter2[Emitter2["SetDebugMode"] = 24] = "SetDebugMode";
  Emitter2[Emitter2["GetMetadata"] = 25] = "GetMetadata";
  Emitter2[Emitter2["ResetNodes"] = 26] = "ResetNodes";
  Emitter2[Emitter2["Shutdown"] = 27] = "Shutdown";
  Emitter2[Emitter2["Reboot"] = 28] = "Reboot";
  Emitter2[Emitter2["RebootOta"] = 29] = "RebootOta";
  Emitter2[Emitter2["FactoryReset"] = 30] = "FactoryReset";
  Emitter2[Emitter2["EnterDfuMode"] = 31] = "EnterDfuMode";
  Emitter2[Emitter2["RemoveNodeByNum"] = 32] = "RemoveNodeByNum";
  Emitter2[Emitter2["SetCannedMessages"] = 33] = "SetCannedMessages";
  return Emitter2;
})(Emitter || {});
var ChannelNumber = /* @__PURE__ */ ((ChannelNumber2) => {
  ChannelNumber2[ChannelNumber2["Primary"] = 0] = "Primary";
  ChannelNumber2[ChannelNumber2["Channel1"] = 1] = "Channel1";
  ChannelNumber2[ChannelNumber2["Channel2"] = 2] = "Channel2";
  ChannelNumber2[ChannelNumber2["Channel3"] = 3] = "Channel3";
  ChannelNumber2[ChannelNumber2["Channel4"] = 4] = "Channel4";
  ChannelNumber2[ChannelNumber2["Channel5"] = 5] = "Channel5";
  ChannelNumber2[ChannelNumber2["Channel6"] = 6] = "Channel6";
  ChannelNumber2[ChannelNumber2["Admin"] = 7] = "Admin";
  return ChannelNumber2;
})(ChannelNumber || {});

// src/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  EventSystem: () => EventSystem,
  Queue: () => Queue,
  Xmodem: () => Xmodem2,
  transformHandler: () => transformHandler,
  typedArrayToBuffer: () => typedArrayToBuffer
});

// src/utils/eventSystem.ts
import { SimpleEventDispatcher } from "ste-simple-events";
var EventSystem = class {
  /**
   * Fires when a new FromRadio message has been received from the device
   *
   * @event onLogEvent
   */
  onLogEvent = new SimpleEventDispatcher();
  /**
   * Fires when a new FromRadio message has been received from the device
   *
   * @event onFromRadio
   */
  onFromRadio = new SimpleEventDispatcher();
  /**
   * Fires when a new FromRadio message containing a Data packet has been
   * received from the device
   *
   * @event onMeshPacket
   */
  onMeshPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MyNodeInfo message has been received from the device
   *
   * @event onMyNodeInfo
   */
  onMyNodeInfo = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a NodeInfo packet has been
   * received from device
   *
   * @event onNodeInfoPacket
   */
  onNodeInfoPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new Channel message is received
   *
   * @event onChannelPacket
   */
  onChannelPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new Config message is received
   *
   * @event onConfigPacket
   */
  onConfigPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new ModuleConfig message is received
   *
   * @event onModuleConfigPacket
   */
  onModuleConfigPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a ATAK packet has been
   * received from device
   *
   * @event onAtakPacket
   */
  onAtakPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Text packet has been
   * received from device
   *
   * @event onMessagePacket
   */
  onMessagePacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Remote Hardware packet has
   * been received from device
   *
   * @event onRemoteHardwarePacket
   */
  onRemoteHardwarePacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Position packet has been
   * received from device
   *
   * @event onPositionPacket
   */
  onPositionPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a User packet has been
   * received from device
   *
   * @event onUserPacket
   */
  onUserPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Routing packet has been
   * received from device
   *
   * @event onRoutingPacket
   */
  onRoutingPacket = new SimpleEventDispatcher();
  /**
   * Fires when the device receives a Metadata packet
   *
   * @event onDeviceMetadataPacket
   */
  onDeviceMetadataPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Waypoint packet has been
   * received from device
   *
   * @event onWaypointPacket
   */
  onWaypointPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing an Audio packet has been
   * received from device
   *
   * @event onAudioPacket
   */
  onAudioPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Detection Sensor packet has been
   * received from device
   *
   * @event onDetectionSensorPacket
   */
  onDetectionSensorPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Ping packet has been
   * received from device
   *
   * @event onPingPacket
   */
  onPingPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a IP Tunnel packet has been
   * received from device
   *
   * @event onIpTunnelPacket
   */
  onIpTunnelPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Paxcounter packet has been
   * received from device
   *
   * @event onPaxcounterPacket
   */
  onPaxcounterPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Serial packet has been
   * received from device
   *
   * @event onSerialPacket
   */
  onSerialPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Store and Forward packet
   * has been received from device
   *
   * @event onStoreForwardPacket
   */
  onStoreForwardPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Store and Forward packet
   * has been received from device
   *
   * @event onRangeTestPacket
   */
  onRangeTestPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Telemetry packet has been
   * received from device
   *
   * @event onTelemetryPacket
   */
  onTelemetryPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a ZPS packet has been
   * received from device
   *
   * @event onZPSPacket
   */
  onZpsPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Simulator packet has been
   * received from device
   *
   * @event onSimulatorPacket
   */
  onSimulatorPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Trace Route packet has been
   * received from device
   *
   * @event onTraceRoutePacket
   */
  onTraceRoutePacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Neighbor Info packet has been
   * received from device
   *
   * @event onNeighborInfoPacket
   */
  onNeighborInfoPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing an ATAK packet has been
   * received from device
   *
   * @event onAtakPluginPacket
   */
  onAtakPluginPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Map Report packet has been
   * received from device
   *
   * @event onMapReportPacket
   */
  onMapReportPacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing a Private packet has been
   * received from device
   *
   * @event onPrivatePacket
   */
  onPrivatePacket = new SimpleEventDispatcher();
  /**
   * Fires when a new MeshPacket message containing an ATAK Forwarder packet has been
   * received from device
   *
   * @event onAtakForwarderPacket
   */
  onAtakForwarderPacket = new SimpleEventDispatcher();
  /**
   * Fires when the devices connection or configuration status changes
   *
   * @event onDeviceStatus
   */
  onDeviceStatus = new SimpleEventDispatcher();
  /**
   * Fires when a new FromRadio message containing a LogRecord packet has been
   * received from device
   *
   * @event onLogRecord
   */
  onLogRecord = new SimpleEventDispatcher();
  /**
   * Fires when the device receives a meshPacket, returns a timestamp
   *
   * @event onMeshHeartbeat
   */
  onMeshHeartbeat = new SimpleEventDispatcher();
  /**
   * Outputs any debug log data (currently serial connections only)
   *
   * @event onDeviceDebugLog
   */
  onDeviceDebugLog = new SimpleEventDispatcher();
  /**
   * Outputs status of pending settings changes
   *
   * @event onpendingSettingsChange
   */
  onPendingSettingsChange = new SimpleEventDispatcher();
  /**
   * Fires when a QueueStatus message is generated
   *
   * @event onQueueStatus
   */
  onQueueStatus = new SimpleEventDispatcher();
};

// src/utils/general.ts
var typedArrayToBuffer = (array) => {
  return array.buffer.slice(
    array.byteOffset,
    array.byteLength + array.byteOffset
  );
};

// src/utils/queue.ts
import { SimpleEventDispatcher as SimpleEventDispatcher2 } from "ste-simple-events";
import { fromBinary } from "@bufbuild/protobuf";
import * as Protobuf from "@meshtastic/protobufs";
var Queue = class {
  queue = [];
  lock = false;
  ackNotifier = new SimpleEventDispatcher2();
  errorNotifier = new SimpleEventDispatcher2();
  timeout;
  constructor() {
    this.timeout = 6e4;
  }
  getState() {
    return this.queue;
  }
  clear() {
    this.queue = [];
  }
  push(item) {
    const queueItem = {
      ...item,
      sent: false,
      added: /* @__PURE__ */ new Date(),
      promise: new Promise((resolve, reject) => {
        this.ackNotifier.subscribe((id) => {
          if (item.id === id) {
            this.remove(item.id);
            resolve(id);
          }
        });
        this.errorNotifier.subscribe((e) => {
          if (item.id === e.id) {
            this.remove(item.id);
            reject(e);
          }
        });
        setTimeout(() => {
          if (this.queue.findIndex((qi) => qi.id === item.id) !== -1) {
            this.remove(item.id);
            const decoded = fromBinary(Protobuf.Mesh.ToRadioSchema, item.data);
            console.warn(
              `Packet ${item.id} of type ${decoded.payloadVariant.case} timed out`
            );
            reject({
              id: item.id,
              error: Protobuf.Mesh.Routing_Error.TIMEOUT
            });
          }
        }, this.timeout);
      })
    };
    this.queue.push(queueItem);
  }
  remove(id) {
    if (this.lock) {
      setTimeout(() => this.remove(id), 100);
      return;
    }
    this.queue = this.queue.filter((item) => item.id !== id);
  }
  processAck(id) {
    this.ackNotifier.dispatch(id);
  }
  processError(e) {
    console.error(
      `Error received for packet ${e.id}: ${Protobuf.Mesh.Routing_Error[e.error]}`
    );
    this.errorNotifier.dispatch(e);
  }
  async wait(id) {
    const queueItem = this.queue.find((qi) => qi.id === id);
    if (!queueItem) {
      throw new Error("Packet does not exist");
    }
    return queueItem.promise;
  }
  async processQueue(writeToRadio) {
    if (this.lock) {
      return;
    }
    this.lock = true;
    while (this.queue.filter((p) => !p.sent).length > 0) {
      const item = this.queue.filter((p) => !p.sent)[0];
      if (item) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        try {
          await writeToRadio(item.data);
          item.sent = true;
        } catch (error) {
          console.error(`Error sending packet ${item.id}`, error);
        }
      }
    }
    this.lock = false;
  }
};

// src/utils/transformHandler.ts
import * as Protobuf2 from "@meshtastic/protobufs";
var transformHandler = (log, onReleaseEvent, onDeviceDebugLog, concurrentLogOutput) => {
  let byteBuffer = new Uint8Array([]);
  return new TransformStream({
    transform(chunk, controller) {
      log = log.getSubLogger({ name: "streamTransformer" });
      onReleaseEvent.subscribe(() => {
        controller.terminate();
      });
      byteBuffer = new Uint8Array([...byteBuffer, ...chunk]);
      let processingExhausted = false;
      while (byteBuffer.length !== 0 && !processingExhausted) {
        const framingIndex = byteBuffer.findIndex((byte) => byte === 148);
        const framingByte2 = byteBuffer[framingIndex + 1];
        if (framingByte2 === 195) {
          if (byteBuffer.subarray(0, framingIndex).length) {
            if (concurrentLogOutput) {
              onDeviceDebugLog.dispatch(byteBuffer.subarray(0, framingIndex));
            } else {
              log.warn(
                2 /* SerialConnection */,
                20 /* Connect */,
                `\u26A0\uFE0F Found unneccesary message padding, removing: ${byteBuffer.subarray(0, framingIndex).toString()}`
              );
            }
            byteBuffer = byteBuffer.subarray(framingIndex);
          }
          const msb = byteBuffer[2];
          const lsb = byteBuffer[3];
          if (msb !== void 0 && lsb !== void 0 && byteBuffer.length >= 4 + (msb << 8) + lsb) {
            const packet = byteBuffer.subarray(4, 4 + (msb << 8) + lsb);
            const malformedDetectorIndex = packet.findIndex(
              (byte) => byte === 148
            );
            if (malformedDetectorIndex !== -1 && packet[malformedDetectorIndex + 1] === 195) {
              log.warn(
                2 /* SerialConnection */,
                20 /* Connect */,
                `\u26A0\uFE0F Malformed packet found, discarding: ${byteBuffer.subarray(0, malformedDetectorIndex - 1).toString()}`,
                Protobuf2.Mesh.LogRecord_Level.WARNING
              );
              byteBuffer = byteBuffer.subarray(malformedDetectorIndex);
            } else {
              byteBuffer = byteBuffer.subarray(3 + (msb << 8) + lsb + 1);
              controller.enqueue(packet);
            }
          } else {
            processingExhausted = true;
          }
        } else {
          processingExhausted = true;
        }
      }
    }
  });
};

// src/utils/xmodem.ts
import crc16ccitt from "crc/calculators/crc16ccitt";
import { create, toBinary } from "@bufbuild/protobuf";
import * as Protobuf3 from "@meshtastic/protobufs";
var Xmodem2 = class {
  sendRaw;
  rxBuffer;
  txBuffer;
  textEncoder;
  counter;
  constructor(sendRaw) {
    this.sendRaw = sendRaw;
    this.rxBuffer = [];
    this.txBuffer = [];
    this.textEncoder = new TextEncoder();
    this.counter = 0;
  }
  async downloadFile(filename) {
    return await this.sendCommand(
      Protobuf3.Xmodem.XModem_Control.STX,
      this.textEncoder.encode(filename),
      0
    );
  }
  async uploadFile(filename, data) {
    for (let i = 0; i < data.length; i += 128) {
      this.txBuffer.push(data.slice(i, i + 128));
    }
    return await this.sendCommand(
      Protobuf3.Xmodem.XModem_Control.SOH,
      this.textEncoder.encode(filename),
      0
    );
  }
  async sendCommand(command, buffer, sequence, crc16) {
    const toRadio = create(Protobuf3.Mesh.ToRadioSchema, {
      payloadVariant: {
        case: "xmodemPacket",
        value: {
          buffer,
          control: command,
          seq: sequence,
          crc16
        }
      }
    });
    return await this.sendRaw(toBinary(Protobuf3.Mesh.ToRadioSchema, toRadio));
  }
  async handlePacket(packet) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    switch (packet.control) {
      case Protobuf3.Xmodem.XModem_Control.NUL: {
        break;
      }
      case Protobuf3.Xmodem.XModem_Control.SOH: {
        this.counter = packet.seq;
        if (this.validateCrc16(packet)) {
          this.rxBuffer[this.counter] = packet.buffer;
          return this.sendCommand(Protobuf3.Xmodem.XModem_Control.ACK);
        }
        return await this.sendCommand(
          Protobuf3.Xmodem.XModem_Control.NAK,
          void 0,
          packet.seq
        );
      }
      case Protobuf3.Xmodem.XModem_Control.STX: {
        break;
      }
      case Protobuf3.Xmodem.XModem_Control.EOT: {
        break;
      }
      case Protobuf3.Xmodem.XModem_Control.ACK: {
        this.counter++;
        if (this.txBuffer[this.counter - 1]) {
          return this.sendCommand(
            Protobuf3.Xmodem.XModem_Control.SOH,
            this.txBuffer[this.counter - 1],
            this.counter,
            crc16ccitt(this.txBuffer[this.counter - 1] ?? new Uint8Array())
          );
        }
        if (this.counter === this.txBuffer.length + 1) {
          return this.sendCommand(Protobuf3.Xmodem.XModem_Control.EOT);
        }
        this.clear();
        break;
      }
      case Protobuf3.Xmodem.XModem_Control.NAK: {
        return this.sendCommand(
          Protobuf3.Xmodem.XModem_Control.SOH,
          this.txBuffer[this.counter],
          this.counter,
          crc16ccitt(this.txBuffer[this.counter - 1] ?? new Uint8Array())
        );
      }
      case Protobuf3.Xmodem.XModem_Control.CAN: {
        this.clear();
        break;
      }
      case Protobuf3.Xmodem.XModem_Control.CTRLZ: {
        break;
      }
    }
    return Promise.resolve(0);
  }
  validateCrc16(packet) {
    return crc16ccitt(packet.buffer) === packet.crc16;
  }
  clear() {
    this.counter = 0;
    this.rxBuffer = [];
    this.txBuffer = [];
  }
};

// src/meshDevice.ts
import { create as create2, fromBinary as fromBinary2, toBinary as toBinary2 } from "@bufbuild/protobuf";
var MeshDevice = class {
  /** Logs to the console and the logging event emitter */
  log;
  /** Describes the current state of the device */
  deviceStatus;
  /** Describes the current state of the device */
  isConfigured;
  /** Are there any settings that have yet to be applied? */
  pendingSettingsChanges;
  /** Device's node number */
  myNodeInfo;
  /** Randomly generated number to ensure confiuration lockstep */
  configId;
  /**
   * Packert queue, to space out transmissions and routing handle errors and
   * acks
   */
  queue;
  events;
  xModem;
  constructor(configId) {
    this.log = new Logger({
      name: "iMeshDevice",
      prettyLogTemplate: "{{hh}}:{{MM}}:{{ss}}:{{ms}}	{{logLevelName}}	[{{name}}]	"
    });
    this.deviceStatus = 2 /* DeviceDisconnected */;
    this.isConfigured = false;
    this.pendingSettingsChanges = false;
    this.myNodeInfo = create2(Protobuf4.Mesh.MyNodeInfoSchema);
    this.configId = configId ?? this.generateRandId();
    this.queue = new Queue();
    this.events = new EventSystem();
    this.xModem = new Xmodem2(this.sendRaw.bind(this));
    this.events.onDeviceStatus.subscribe((status) => {
      this.deviceStatus = status;
      if (status === 7 /* DeviceConfigured */) {
        this.isConfigured = true;
      } else if (status === 6 /* DeviceConfiguring */) {
        this.isConfigured = false;
      }
    });
    this.events.onMyNodeInfo.subscribe((myNodeInfo) => {
      this.myNodeInfo = myNodeInfo;
    });
    this.events.onPendingSettingsChange.subscribe((state) => {
      this.pendingSettingsChanges = state;
    });
  }
  /**
   * Sends a text over the radio
   */
  async sendText(text, destination, wantAck, channel) {
    this.log.debug(
      Emitter[1 /* SendText */],
      `\u{1F4E4} Sending message to ${destination ?? "broadcast"} on channel ${channel?.toString() ?? 0}`
    );
    const enc = new TextEncoder();
    return await this.sendPacket(
      enc.encode(text),
      Protobuf4.Portnums.PortNum.TEXT_MESSAGE_APP,
      destination ?? "broadcast",
      channel,
      wantAck,
      false,
      true
    );
  }
  /**
   * Sends a text over the radio
   */
  sendWaypoint(waypointMessage, destination, channel) {
    this.log.debug(
      Emitter[2 /* SendWaypoint */],
      `\u{1F4E4} Sending waypoint to ${destination} on channel ${channel?.toString() ?? 0}`
    );
    waypointMessage.id = this.generateRandId();
    return this.sendPacket(
      toBinary2(Protobuf4.Mesh.WaypointSchema, waypointMessage),
      Protobuf4.Portnums.PortNum.WAYPOINT_APP,
      destination,
      channel,
      true,
      false
    );
  }
  /**
   * Sends packet over the radio
   */
  async sendPacket(byteData, portNum, destination, channel = 0 /* Primary */, wantAck = true, wantResponse = true, echoResponse = false, replyId, emoji) {
    this.log.trace(
      Emitter[3 /* SendPacket */],
      `\u{1F4E4} Sending ${Protobuf4.Portnums.PortNum[portNum]} to ${destination}`
    );
    const meshPacket = create2(Protobuf4.Mesh.MeshPacketSchema, {
      payloadVariant: {
        case: "decoded",
        value: {
          payload: byteData,
          portnum: portNum,
          wantResponse,
          emoji,
          replyId,
          dest: 0,
          //change this!
          requestId: 0,
          //change this!
          source: 0
          //change this!
        }
      },
      from: this.myNodeInfo.myNodeNum,
      to: destination === "broadcast" ? broadcastNum : destination === "self" ? this.myNodeInfo.myNodeNum : destination,
      id: this.generateRandId(),
      wantAck,
      channel
    });
    const toRadioMessage = create2(Protobuf4.Mesh.ToRadioSchema, {
      payloadVariant: {
        case: "packet",
        value: meshPacket
      }
    });
    if (echoResponse) {
      meshPacket.rxTime = Math.trunc((/* @__PURE__ */ new Date()).getTime() / 1e3);
      this.handleMeshPacket(meshPacket);
    }
    return await this.sendRaw(
      toBinary2(Protobuf4.Mesh.ToRadioSchema, toRadioMessage),
      meshPacket.id
    );
  }
  /**
   * Sends raw packet over the radio
   */
  async sendRaw(toRadio, id = this.generateRandId()) {
    if (toRadio.length > 512) {
      throw new Error("Message longer than 512 bytes, it will not be sent!");
    }
    this.queue.push({
      id,
      data: toRadio
    });
    await this.queue.processQueue(async (data) => {
      await this.writeToRadio(data);
    });
    return this.queue.wait(id);
  }
  /**
   * Writes config to device
   */
  async setConfig(config) {
    this.log.debug(
      Emitter[5 /* SetConfig */],
      `\u2699\uFE0F Setting config, Variant: ${config.payloadVariant.case ?? "Unknown"}`
    );
    if (!this.pendingSettingsChanges) {
      await this.beginEditSettings();
    }
    const configMessage = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "setConfig",
        value: config
      }
    });
    return this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, configMessage),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /**
   * Writes module config to device
   */
  async setModuleConfig(moduleConfig) {
    this.log.debug(
      Emitter[6 /* SetModuleConfig */],
      "\u2699\uFE0F Setting module config"
    );
    const moduleConfigMessage = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "setModuleConfig",
        value: moduleConfig
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, moduleConfigMessage),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  // Write cannedMessages to device
  async setCannedMessages(cannedMessages) {
    this.log.debug(
      Emitter[33 /* SetCannedMessages */],
      "\u2699\uFE0F Setting CannedMessages"
    );
    const cannedMessagesMessage = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "setCannedMessageModuleMessages",
        value: cannedMessages.messages
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, cannedMessagesMessage),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /**
   * Sets devices owner data
   */
  async setOwner(owner) {
    this.log.debug(Emitter[8 /* SetOwner */], "\u{1F464} Setting owner");
    const setOwnerMessage = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "setOwner",
        value: owner
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, setOwnerMessage),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /**
   * Sets devices ChannelSettings
   */
  async setChannel(channel) {
    this.log.debug(
      Emitter[9 /* SetChannel */],
      `\u{1F4FB} Setting Channel: ${channel.index}`
    );
    const setChannelMessage = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "setChannel",
        value: channel
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, setChannelMessage),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  async setPosition(positionMessage) {
    return await this.sendPacket(
      toBinary2(Protobuf4.Mesh.PositionSchema, positionMessage),
      Protobuf4.Portnums.PortNum.POSITION_APP,
      "self"
    );
  }
  /**
   * Gets specified channel information from the radio
   */
  async getChannel(index) {
    this.log.debug(
      Emitter[12 /* GetChannel */],
      `\u{1F4FB} Requesting Channel: ${index}`
    );
    const getChannelRequestMessage = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "getChannelRequest",
        value: index + 1
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, getChannelRequestMessage),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /**
   * Gets devices config
   *   request
   */
  async getConfig(configType) {
    this.log.debug(
      Emitter[14 /* GetConfig */],
      "\u2699\uFE0F Requesting config"
    );
    const getRadioRequestMessage = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "getConfigRequest",
        value: configType
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, getRadioRequestMessage),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /**
   * Gets Module config
   */
  async getModuleConfig(moduleConfigType) {
    this.log.debug(
      Emitter[15 /* GetModuleConfig */],
      "\u2699\uFE0F Requesting module config"
    );
    const getRadioRequestMessage = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "getModuleConfigRequest",
        value: moduleConfigType
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, getRadioRequestMessage),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /** Gets devices Owner */
  async getOwner() {
    this.log.debug(
      Emitter[16 /* GetOwner */],
      "\u{1F464} Requesting owner"
    );
    const getOwnerRequestMessage = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "getOwnerRequest",
        value: true
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, getOwnerRequestMessage),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /**
   * Gets devices metadata
   */
  async getMetadata(nodeNum) {
    this.log.debug(
      Emitter[25 /* GetMetadata */],
      `\u{1F3F7}\uFE0F Requesting metadata from ${nodeNum}`
    );
    const getDeviceMetricsRequestMessage = create2(
      Protobuf4.Admin.AdminMessageSchema,
      {
        payloadVariant: {
          case: "getDeviceMetadataRequest",
          value: true
        }
      }
    );
    return await this.sendPacket(
      toBinary2(
        Protobuf4.Admin.AdminMessageSchema,
        getDeviceMetricsRequestMessage
      ),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      nodeNum,
      7 /* Admin */
    );
  }
  /**
   * Clears specific channel with the designated index
   */
  async clearChannel(index) {
    this.log.debug(
      Emitter[11 /* ClearChannel */],
      `\u{1F4FB} Clearing Channel ${index}`
    );
    const channel = create2(Protobuf4.Channel.ChannelSchema, {
      index,
      role: Protobuf4.Channel.Channel_Role.DISABLED
    });
    const setChannelMessage = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "setChannel",
        value: channel
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, setChannelMessage),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  async beginEditSettings() {
    this.events.onPendingSettingsChange.dispatch(true);
    const beginEditSettings = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "beginEditSettings",
        value: true
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, beginEditSettings),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  async commitEditSettings() {
    this.events.onPendingSettingsChange.dispatch(false);
    const commitEditSettings = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "commitEditSettings",
        value: true
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, commitEditSettings),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /**
   * Resets the internal NodeDB of the radio, usefull for removing old nodes
   * that no longer exist.
   */
  async resetNodes() {
    this.log.debug(
      Emitter[26 /* ResetNodes */],
      "\u{1F4FB} Resetting NodeDB"
    );
    const resetNodes = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "nodedbReset",
        value: 1
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, resetNodes),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /**
   * Removes a node from the internal NodeDB of the radio by node number
   */
  async removeNodeByNum(nodeNum) {
    this.log.debug(
      Emitter[32 /* RemoveNodeByNum */],
      `\u{1F4FB} Removing Node ${nodeNum} from NodeDB`
    );
    const removeNodeByNum = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "removeByNodenum",
        value: nodeNum
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, removeNodeByNum),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /** Shuts down the current node after the specified amount of time has elapsed. */
  async shutdown(time) {
    this.log.debug(
      Emitter[27 /* Shutdown */],
      `\u{1F50C} Shutting down ${time > 2 ? "now" : `in ${time} seconds`}`
    );
    const shutdown = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "shutdownSeconds",
        value: time
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, shutdown),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /** Reboots the current node after the specified amount of time has elapsed. */
  async reboot(time) {
    this.log.debug(
      Emitter[28 /* Reboot */],
      `\u{1F50C} Rebooting node ${time > 0 ? "now" : `in ${time} seconds`}`
    );
    const reboot = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "rebootSeconds",
        value: time
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, reboot),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /**
   * Reboots the current node into OTA mode after the specified amount of time
   * has elapsed.
   */
  async rebootOta(time) {
    this.log.debug(
      Emitter[29 /* RebootOta */],
      `\u{1F50C} Rebooting into OTA mode ${time > 0 ? "now" : `in ${time} seconds`}`
    );
    const rebootOta = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "rebootOtaSeconds",
        value: time
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, rebootOta),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /** Factory resets the current device */
  async factoryResetDevice() {
    this.log.debug(
      Emitter[30 /* FactoryReset */],
      "\u267B\uFE0F Factory resetting device"
    );
    const factoryReset = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "factoryResetDevice",
        value: 1
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, factoryReset),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /** Factory resets the current config */
  async factoryResetConfig() {
    this.log.debug(
      Emitter[30 /* FactoryReset */],
      "\u267B\uFE0F Factory resetting config"
    );
    const factoryReset = create2(Protobuf4.Admin.AdminMessageSchema, {
      payloadVariant: {
        case: "factoryResetConfig",
        value: 1
      }
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Admin.AdminMessageSchema, factoryReset),
      Protobuf4.Portnums.PortNum.ADMIN_APP,
      "self"
    );
  }
  /** Triggers the device configure process */
  configure() {
    this.log.debug(
      Emitter[17 /* Configure */],
      "\u2699\uFE0F Requesting device configuration"
    );
    this.updateDeviceStatus(6 /* DeviceConfiguring */);
    const toRadio = create2(Protobuf4.Mesh.ToRadioSchema, {
      payloadVariant: {
        case: "wantConfigId",
        value: this.configId
      }
    });
    return this.sendRaw(toBinary2(Protobuf4.Mesh.ToRadioSchema, toRadio));
  }
  /** Sends a trace route packet to the designated node */
  async traceRoute(destination) {
    const routeDiscovery = create2(Protobuf4.Mesh.RouteDiscoverySchema, {
      route: []
    });
    return await this.sendPacket(
      toBinary2(Protobuf4.Mesh.RouteDiscoverySchema, routeDiscovery),
      Protobuf4.Portnums.PortNum.TRACEROUTE_APP,
      destination
    );
  }
  /** Requests position from the designated node */
  async requestPosition(destination) {
    return await this.sendPacket(
      new Uint8Array(),
      Protobuf4.Portnums.PortNum.POSITION_APP,
      destination
    );
  }
  /**
   * Updates the device status eliminating duplicate status events
   */
  updateDeviceStatus(status) {
    if (status !== this.deviceStatus) {
      this.events.onDeviceStatus.dispatch(status);
    }
  }
  /**
   * Generates random packet identifier
   *
   * @returns {number} Random packet ID
   */
  generateRandId() {
    const seed = crypto.getRandomValues(new Uint32Array(1));
    if (!seed[0]) {
      throw new Error("Cannot generate CSPRN");
    }
    return Math.floor(seed[0] * 2 ** -32 * 1e9);
  }
  /**
   * Gets called whenever a fromRadio message is received from device, returns
   * fromRadio data
   */
  handleFromRadio(fromRadio) {
    const decodedMessage = fromBinary2(Protobuf4.Mesh.FromRadioSchema, fromRadio);
    this.events.onFromRadio.dispatch(decodedMessage);
    switch (decodedMessage.payloadVariant.case) {
      case "packet": {
        this.handleMeshPacket(decodedMessage.payloadVariant.value);
        break;
      }
      case "myInfo": {
        this.events.onMyNodeInfo.dispatch(decodedMessage.payloadVariant.value);
        this.log.info(
          Emitter[18 /* HandleFromRadio */],
          "\u{1F4F1} Received Node info for this device"
        );
        break;
      }
      case "nodeInfo": {
        this.log.info(
          Emitter[18 /* HandleFromRadio */],
          `\u{1F4F1} Received Node Info packet for node: ${decodedMessage.payloadVariant.value.num}`
        );
        this.events.onNodeInfoPacket.dispatch(
          decodedMessage.payloadVariant.value
        );
        if (decodedMessage.payloadVariant.value.position) {
          this.events.onPositionPacket.dispatch({
            id: decodedMessage.id,
            rxTime: /* @__PURE__ */ new Date(),
            from: decodedMessage.payloadVariant.value.num,
            to: decodedMessage.payloadVariant.value.num,
            type: "direct",
            channel: 0 /* Primary */,
            data: decodedMessage.payloadVariant.value.position
          });
        }
        if (decodedMessage.payloadVariant.value.user) {
          this.events.onUserPacket.dispatch({
            id: decodedMessage.id,
            rxTime: /* @__PURE__ */ new Date(),
            from: decodedMessage.payloadVariant.value.num,
            to: decodedMessage.payloadVariant.value.num,
            type: "direct",
            channel: 0 /* Primary */,
            data: decodedMessage.payloadVariant.value.user
          });
        }
        break;
      }
      case "config": {
        if (decodedMessage.payloadVariant.value.payloadVariant.case) {
          this.log.trace(
            Emitter[18 /* HandleFromRadio */],
            `\u{1F4BE} Received Config packet of variant: ${decodedMessage.payloadVariant.value.payloadVariant.case}`
          );
        } else {
          this.log.warn(
            Emitter[18 /* HandleFromRadio */],
            `\u26A0\uFE0F Received Config packet of variant: ${"UNK"}`
          );
        }
        this.events.onConfigPacket.dispatch(
          decodedMessage.payloadVariant.value
        );
        break;
      }
      case "logRecord": {
        this.log.trace(
          Emitter[18 /* HandleFromRadio */],
          "Received onLogRecord"
        );
        this.events.onLogRecord.dispatch(decodedMessage.payloadVariant.value);
        break;
      }
      case "configCompleteId": {
        if (decodedMessage.payloadVariant.value !== this.configId) {
          this.log.error(
            Emitter[18 /* HandleFromRadio */],
            `\u274C Invalid config id received from device, expected ${this.configId} but received ${decodedMessage.payloadVariant.value}`
          );
        }
        this.log.info(
          Emitter[18 /* HandleFromRadio */],
          `\u2699\uFE0F Valid config id received from device: ${this.configId}`
        );
        this.updateDeviceStatus(7 /* DeviceConfigured */);
        break;
      }
      case "rebooted": {
        this.configure().catch(() => {
        });
        break;
      }
      case "moduleConfig": {
        if (decodedMessage.payloadVariant.value.payloadVariant.case) {
          this.log.trace(
            Emitter[18 /* HandleFromRadio */],
            `\u{1F4BE} Received Module Config packet of variant: ${decodedMessage.payloadVariant.value.payloadVariant.case}`
          );
        } else {
          this.log.warn(
            Emitter[18 /* HandleFromRadio */],
            "\u26A0\uFE0F Received Module Config packet of variant: UNK"
          );
        }
        this.events.onModuleConfigPacket.dispatch(
          decodedMessage.payloadVariant.value
        );
        break;
      }
      case "channel": {
        this.log.trace(
          Emitter[18 /* HandleFromRadio */],
          `\u{1F510} Received Channel: ${decodedMessage.payloadVariant.value.index}`
        );
        this.events.onChannelPacket.dispatch(
          decodedMessage.payloadVariant.value
        );
        break;
      }
      case "queueStatus": {
        this.log.trace(
          Emitter[18 /* HandleFromRadio */],
          `\u{1F6A7} Received Queue Status: ${decodedMessage.payloadVariant.value}`
        );
        this.events.onQueueStatus.dispatch(decodedMessage.payloadVariant.value);
        break;
      }
      case "xmodemPacket": {
        this.xModem.handlePacket(decodedMessage.payloadVariant.value);
        break;
      }
      case "metadata": {
        if (Number.parseFloat(
          decodedMessage.payloadVariant.value.firmwareVersion
        ) < minFwVer) {
          this.log.fatal(
            Emitter[18 /* HandleFromRadio */],
            `Device firmware outdated. Min supported: ${minFwVer} got : ${decodedMessage.payloadVariant.value.firmwareVersion}`
          );
        }
        this.log.debug(
          Emitter[25 /* GetMetadata */],
          "\u{1F3F7}\uFE0F Received metadata packet"
        );
        this.events.onDeviceMetadataPacket.dispatch({
          id: decodedMessage.id,
          rxTime: /* @__PURE__ */ new Date(),
          from: 0,
          to: 0,
          type: "direct",
          channel: 0 /* Primary */,
          data: decodedMessage.payloadVariant.value
        });
        break;
      }
      case "mqttClientProxyMessage": {
        break;
      }
      default: {
        this.log.warn(
          Emitter[18 /* HandleFromRadio */],
          `\u26A0\uFE0F Unhandled payload variant: ${decodedMessage.payloadVariant.case}`
        );
      }
    }
  }
  /** Completes all Events */
  complete() {
    this.queue.clear();
  }
  /**
   * Gets called when a MeshPacket is received from device
   */
  handleMeshPacket(meshPacket) {
    this.events.onMeshPacket.dispatch(meshPacket);
    if (meshPacket.from !== this.myNodeInfo.myNodeNum) {
      this.events.onMeshHeartbeat.dispatch(/* @__PURE__ */ new Date());
    }
    switch (meshPacket.payloadVariant.case) {
      case "decoded": {
        this.handleDecodedPacket(meshPacket.payloadVariant.value, meshPacket);
        break;
      }
      case "encrypted": {
        this.log.debug(
          Emitter[19 /* HandleMeshPacket */],
          "\u{1F510} Device received encrypted data packet, ignoring."
        );
        break;
      }
      default:
        throw new Error(`Unhandled case ${meshPacket.payloadVariant.case}`);
    }
  }
  handleDecodedPacket(dataPacket, meshPacket) {
    let adminMessage = void 0;
    let routingPacket = void 0;
    const packetMetadata = {
      id: meshPacket.id,
      rxTime: new Date(meshPacket.rxTime * 1e3),
      type: meshPacket.to === broadcastNum ? "broadcast" : "direct",
      from: meshPacket.from,
      to: meshPacket.to,
      channel: meshPacket.channel
    };
    this.log.trace(
      Emitter[19 /* HandleMeshPacket */],
      `\u{1F4E6} Received ${Protobuf4.Portnums.PortNum[dataPacket.portnum]} packet`
    );
    switch (dataPacket.portnum) {
      case Protobuf4.Portnums.PortNum.TEXT_MESSAGE_APP: {
        this.events.onMessagePacket.dispatch({
          ...packetMetadata,
          data: new TextDecoder().decode(dataPacket.payload)
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.REMOTE_HARDWARE_APP: {
        this.events.onRemoteHardwarePacket.dispatch({
          ...packetMetadata,
          data: fromBinary2(
            Protobuf4.RemoteHardware.HardwareMessageSchema,
            dataPacket.payload
          )
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.POSITION_APP: {
        this.events.onPositionPacket.dispatch({
          ...packetMetadata,
          data: fromBinary2(Protobuf4.Mesh.PositionSchema, dataPacket.payload)
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.NODEINFO_APP: {
        this.events.onUserPacket.dispatch({
          ...packetMetadata,
          data: fromBinary2(Protobuf4.Mesh.UserSchema, dataPacket.payload)
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.ROUTING_APP: {
        routingPacket = fromBinary2(
          Protobuf4.Mesh.RoutingSchema,
          dataPacket.payload
        );
        this.events.onRoutingPacket.dispatch({
          ...packetMetadata,
          data: routingPacket
        });
        switch (routingPacket.variant.case) {
          case "errorReason": {
            if (routingPacket.variant.value === Protobuf4.Mesh.Routing_Error.NONE) {
              this.queue.processAck(dataPacket.requestId);
            } else {
              this.queue.processError({
                id: dataPacket.requestId,
                error: routingPacket.variant.value
              });
            }
            break;
          }
          case "routeReply": {
            break;
          }
          case "routeRequest": {
            break;
          }
          default: {
            throw new Error(`Unhandled case ${routingPacket.variant.case}`);
          }
        }
        break;
      }
      case Protobuf4.Portnums.PortNum.ADMIN_APP: {
        adminMessage = fromBinary2(
          Protobuf4.Admin.AdminMessageSchema,
          dataPacket.payload
        );
        switch (adminMessage.payloadVariant.case) {
          case "getChannelResponse": {
            this.events.onChannelPacket.dispatch(
              adminMessage.payloadVariant.value
            );
            break;
          }
          case "getOwnerResponse": {
            this.events.onUserPacket.dispatch({
              ...packetMetadata,
              data: adminMessage.payloadVariant.value
            });
            break;
          }
          case "getConfigResponse": {
            this.events.onConfigPacket.dispatch(
              adminMessage.payloadVariant.value
            );
            break;
          }
          case "getModuleConfigResponse": {
            this.events.onModuleConfigPacket.dispatch(
              adminMessage.payloadVariant.value
            );
            break;
          }
          case "getDeviceMetadataResponse": {
            this.log.debug(
              Emitter[25 /* GetMetadata */],
              `\u{1F3F7}\uFE0F Received metadata packet from ${dataPacket.source}`
            );
            this.events.onDeviceMetadataPacket.dispatch({
              ...packetMetadata,
              data: adminMessage.payloadVariant.value
            });
            break;
          }
          default: {
            this.log.error(
              Emitter[19 /* HandleMeshPacket */],
              `\u26A0\uFE0F Received unhandled AdminMessage, type ${adminMessage.payloadVariant.case ?? "undefined"}`,
              dataPacket.payload
            );
          }
        }
        break;
      }
      case Protobuf4.Portnums.PortNum.WAYPOINT_APP: {
        this.events.onWaypointPacket.dispatch({
          ...packetMetadata,
          data: fromBinary2(Protobuf4.Mesh.WaypointSchema, dataPacket.payload)
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.AUDIO_APP: {
        this.events.onAudioPacket.dispatch({
          ...packetMetadata,
          data: dataPacket.payload
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.DETECTION_SENSOR_APP: {
        this.events.onDetectionSensorPacket.dispatch({
          ...packetMetadata,
          data: dataPacket.payload
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.REPLY_APP: {
        this.events.onPingPacket.dispatch({
          ...packetMetadata,
          data: dataPacket.payload
          //TODO: decode
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.IP_TUNNEL_APP: {
        this.events.onIpTunnelPacket.dispatch({
          ...packetMetadata,
          data: dataPacket.payload
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.PAXCOUNTER_APP: {
        this.events.onPaxcounterPacket.dispatch({
          ...packetMetadata,
          data: fromBinary2(
            Protobuf4.PaxCount.PaxcountSchema,
            dataPacket.payload
          )
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.SERIAL_APP: {
        this.events.onSerialPacket.dispatch({
          ...packetMetadata,
          data: dataPacket.payload
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.STORE_FORWARD_APP: {
        this.events.onStoreForwardPacket.dispatch({
          ...packetMetadata,
          data: dataPacket.payload
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.RANGE_TEST_APP: {
        this.events.onRangeTestPacket.dispatch({
          ...packetMetadata,
          data: dataPacket.payload
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.TELEMETRY_APP: {
        this.events.onTelemetryPacket.dispatch({
          ...packetMetadata,
          data: fromBinary2(
            Protobuf4.Telemetry.TelemetrySchema,
            dataPacket.payload
          )
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.ZPS_APP: {
        this.events.onZpsPacket.dispatch({
          ...packetMetadata,
          data: dataPacket.payload
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.SIMULATOR_APP: {
        this.events.onSimulatorPacket.dispatch({
          ...packetMetadata,
          data: dataPacket.payload
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.TRACEROUTE_APP: {
        this.events.onTraceRoutePacket.dispatch({
          ...packetMetadata,
          data: fromBinary2(
            Protobuf4.Mesh.RouteDiscoverySchema,
            dataPacket.payload
          )
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.NEIGHBORINFO_APP: {
        this.events.onNeighborInfoPacket.dispatch({
          ...packetMetadata,
          data: fromBinary2(
            Protobuf4.Mesh.NeighborInfoSchema,
            dataPacket.payload
          )
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.ATAK_PLUGIN: {
        this.events.onAtakPluginPacket.dispatch({
          ...packetMetadata,
          data: dataPacket.payload
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.MAP_REPORT_APP: {
        this.events.onMapReportPacket.dispatch({
          ...packetMetadata,
          data: dataPacket.payload
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.PRIVATE_APP: {
        this.events.onPrivatePacket.dispatch({
          ...packetMetadata,
          data: dataPacket.payload
        });
        break;
      }
      case Protobuf4.Portnums.PortNum.ATAK_FORWARDER: {
        this.events.onAtakForwarderPacket.dispatch({
          ...packetMetadata,
          data: dataPacket.payload
        });
        break;
      }
      default:
        throw new Error(`Unhandled case ${dataPacket.portnum}`);
    }
  }
};

// src/adapters/bleConnection.ts
var BleConnection = class extends MeshDevice {
  /** Defines the connection type as ble */
  connType;
  portId;
  /** Currently connected BLE device */
  device;
  gattServer;
  /** Short Description */
  service;
  /** Short Description */
  toRadioCharacteristic;
  /** Short Description */
  fromRadioCharacteristic;
  /** Short Description */
  fromNumCharacteristic;
  timerUpdateFromRadio = null;
  constructor(configId) {
    super(configId);
    this.log = this.log.getSubLogger({ name: "HttpConnection" });
    this.connType = "ble";
    this.portId = "";
    this.device = void 0;
    this.service = void 0;
    this.gattServer = void 0;
    this.toRadioCharacteristic = void 0;
    this.fromRadioCharacteristic = void 0;
    this.fromNumCharacteristic = void 0;
    this.log.debug(
      Emitter[0 /* Constructor */],
      "\u{1F537} BleConnection instantiated"
    );
  }
  /**
   * Gets web bluetooth support avaliability for the device
   *
   * @returns {Promise<void>}
   */
  supported() {
    return navigator.bluetooth.getAvailability();
  }
  /**
   * Gets list of bluetooth devices that can be passed to `connect`
   *
   * @returns {Promise<BluetoothDevice[]>} Array of avaliable BLE devices
   */
  getDevices() {
    return navigator.bluetooth.getDevices();
  }
  /**
   * Opens browser dialog to select a device
   */
  getDevice(filter) {
    return navigator.bluetooth.requestDevice(
      filter ?? {
        filters: [{ services: [ServiceUuid] }]
      }
    );
  }
  /**
   * Initiates the connect process to a Meshtastic device via Bluetooth
   */
  async connect({
    device,
    deviceFilter
  }) {
    this.updateDeviceStatus(3 /* DeviceConnecting */);
    this.device = device ?? await this.getDevice(deviceFilter);
    this.portId = this.device.id;
    this.device.addEventListener("gattserverdisconnected", () => {
      this.log.info(
        Emitter[20 /* Connect */],
        "Device disconnected"
      );
      this.updateDeviceStatus(2 /* DeviceDisconnected */);
      this.complete();
    });
    await this.device.gatt?.connect().then((server) => {
      this.log.info(
        Emitter[20 /* Connect */],
        `\u2705 Got GATT Server for device: ${server.device.id}`
      );
      this.gattServer = server;
    }).catch((e) => {
      this.log.error(
        Emitter[20 /* Connect */],
        `\u274C Failed to connect: ${e.message}`
      );
    });
    await this.gattServer?.getPrimaryService(ServiceUuid).then((service) => {
      this.log.info(
        Emitter[20 /* Connect */],
        `\u2705 Got GATT Service for device: ${service.device.id}`
      );
      this.service = service;
    }).catch((e) => {
      this.log.error(
        Emitter[20 /* Connect */],
        `\u274C Failed to get primary service: q${e.message}`
      );
    });
    [ToRadioUuid, FromRadioUuid, FromNumUuid].map(async (uuid) => {
      await this.service?.getCharacteristic(uuid).then((characteristic) => {
        this.log.info(
          Emitter[20 /* Connect */],
          `\u2705 Got Characteristic ${characteristic.uuid} for device: ${characteristic.uuid}`
        );
        switch (uuid) {
          case ToRadioUuid: {
            this.toRadioCharacteristic = characteristic;
            break;
          }
          case FromRadioUuid: {
            this.fromRadioCharacteristic = characteristic;
            break;
          }
          case FromNumUuid: {
            this.fromNumCharacteristic = characteristic;
            break;
          }
        }
      }).catch((e) => {
        this.log.error(
          Emitter[20 /* Connect */],
          `\u274C Failed to get toRadio characteristic: q${e.message}`
        );
      });
    });
    await this.fromNumCharacteristic?.startNotifications();
    this.fromNumCharacteristic?.addEventListener(
      "characteristicvaluechanged",
      () => {
        this.readFromRadio();
      }
    );
    this.updateDeviceStatus(5 /* DeviceConnected */);
    this.configure().catch(() => {
    });
    this.timerUpdateFromRadio = setInterval(() => this.readFromRadio(), 1e3);
  }
  /** Disconnects from the Meshtastic device */
  disconnect() {
    this.device?.gatt?.disconnect();
    this.updateDeviceStatus(2 /* DeviceDisconnected */);
    this.complete();
    if (this.timerUpdateFromRadio) {
      clearInterval(this.timerUpdateFromRadio);
    }
    this.timerUpdateFromRadio = null;
  }
  /**
   * Pings device to check if it is avaliable
   *
   * @todo Implement
   */
  async ping() {
    return await Promise.resolve(true);
  }
  /** Short description */
  async readFromRadio() {
    let readBuffer = new ArrayBuffer(1);
    while (readBuffer.byteLength > 0 && this.fromRadioCharacteristic) {
      await this.fromRadioCharacteristic.readValue().then((value) => {
        readBuffer = value.buffer;
        if (value.byteLength > 0) {
          this.handleFromRadio(new Uint8Array(readBuffer));
        }
        this.updateDeviceStatus(5 /* DeviceConnected */);
      }).catch((e) => {
        readBuffer = new ArrayBuffer(0);
        this.log.error(
          Emitter[22 /* ReadFromRadio */],
          `\u274C ${e.message}`
        );
      });
    }
  }
  /**
   * Sends supplied protobuf message to the radio
   */
  async writeToRadio(data) {
    await this.toRadioCharacteristic?.writeValue(typedArrayToBuffer(data));
    await this.readFromRadio();
  }
};

// src/adapters/httpConnection.ts
var HttpConnection = class extends MeshDevice {
  /** Defines the connection type as http */
  connType;
  /** URL of the device that is to be connected to. */
  portId;
  /** Enables receiving messages all at once, versus one per request */
  receiveBatchRequests;
  readLoop;
  pendingRequest;
  abortController;
  constructor(configId) {
    super(configId);
    this.log = this.log.getSubLogger({ name: "HttpConnection" });
    this.connType = "http";
    this.portId = "";
    this.receiveBatchRequests = false;
    this.readLoop = null;
    this.pendingRequest = false;
    this.abortController = new AbortController();
    this.log.debug(
      Emitter[0 /* Constructor */],
      "\u{1F537} HttpConnection instantiated"
    );
  }
  /**
   * Initiates the connect process to a Meshtastic device via HTTP(S)
   */
  async connect({
    address,
    fetchInterval = 3e3,
    receiveBatchRequests = false,
    tls = false
  }) {
    this.updateDeviceStatus(3 /* DeviceConnecting */);
    this.receiveBatchRequests = receiveBatchRequests;
    this.portId = `${tls ? "https://" : "http://"}${address}`;
    if (this.deviceStatus === 3 /* DeviceConnecting */ && await this.ping()) {
      this.log.debug(
        Emitter[20 /* Connect */],
        "Ping succeeded, starting configuration and request timer."
      );
      this.configure().catch(() => {
      });
      this.readLoop = setInterval(() => {
        this.readFromRadio().catch((e) => {
          this.log.error(
            Emitter[20 /* Connect */],
            `\u274C ${e.message}`
          );
        });
      }, fetchInterval);
    } else if (this.deviceStatus !== 2 /* DeviceDisconnected */) {
      setTimeout(() => {
        this.connect({
          address,
          fetchInterval,
          receiveBatchRequests,
          tls
        });
      }, 1e4);
    }
  }
  /** Disconnects from the Meshtastic device */
  disconnect() {
    this.abortController.abort();
    this.updateDeviceStatus(2 /* DeviceDisconnected */);
    if (this.readLoop) {
      clearInterval(this.readLoop);
      this.complete();
    }
  }
  /** Pings device to check if it is avaliable */
  async ping() {
    this.log.debug(
      Emitter[21 /* Ping */],
      "Attempting device ping."
    );
    const { signal } = this.abortController;
    let pingSuccessful = false;
    await fetch(`${this.portId}/hotspot-detect.html`, {
      signal,
      mode: "no-cors"
    }).then(() => {
      pingSuccessful = true;
      this.updateDeviceStatus(5 /* DeviceConnected */);
    }).catch((e) => {
      pingSuccessful = false;
      this.log.error(Emitter[21 /* Ping */], `\u274C ${e.message}`);
      this.updateDeviceStatus(4 /* DeviceReconnecting */);
    });
    return pingSuccessful;
  }
  /** Reads any avaliable protobuf messages from the radio */
  async readFromRadio() {
    if (this.pendingRequest) {
      return;
    }
    let readBuffer = new ArrayBuffer(1);
    const { signal } = this.abortController;
    while (readBuffer.byteLength > 0) {
      this.pendingRequest = true;
      await fetch(
        `${this.portId}/api/v1/fromradio?all=${this.receiveBatchRequests ? "true" : "false"}`,
        {
          signal,
          method: "GET",
          headers: {
            Accept: "application/x-protobuf"
          }
        }
      ).then(async (response) => {
        this.pendingRequest = false;
        this.updateDeviceStatus(5 /* DeviceConnected */);
        readBuffer = await response.arrayBuffer();
        if (readBuffer.byteLength > 0) {
          this.handleFromRadio(new Uint8Array(readBuffer));
        }
      }).catch((e) => {
        this.pendingRequest = false;
        this.log.error(
          Emitter[22 /* ReadFromRadio */],
          `\u274C ${e.message}`
        );
        this.updateDeviceStatus(4 /* DeviceReconnecting */);
      });
    }
  }
  /**
   * Sends supplied protobuf message to the radio
   */
  async writeToRadio(data) {
    const { signal } = this.abortController;
    await fetch(`${this.portId}/api/v1/toradio`, {
      signal,
      method: "PUT",
      headers: {
        "Content-Type": "application/x-protobuf"
      },
      body: typedArrayToBuffer(data)
    }).then(async () => {
      this.updateDeviceStatus(5 /* DeviceConnected */);
      await this.readFromRadio().catch((e) => {
        this.log.error(
          Emitter[23 /* WriteToRadio */],
          `\u274C ${e.message}`
        );
      });
    }).catch((e) => {
      this.log.error(
        Emitter[23 /* WriteToRadio */],
        `\u274C ${e.message}`
      );
      this.updateDeviceStatus(4 /* DeviceReconnecting */);
    });
  }
};

// src/adapters/serialConnection.ts
import { SimpleEventDispatcher as SimpleEventDispatcher3 } from "ste-simple-events";
var SerialConnection = class extends MeshDevice {
  /** Defines the connection type as serial */
  connType;
  portId;
  /** Serial port used to communicate with device. */
  port;
  readerHack;
  /** Transform stream for parsing raw serial data */
  transformer;
  /** Should locks be prevented */
  preventLock;
  /** Unfortunately, this is currently the only way to release the lock on a stream after piping it
   *  through a transform stream (https://stackoverflow.com/questions/71262432) */
  pipePromise;
  /**
   * Fires when `disconnect()` is called, used to instruct serial port and
   * readers to release there locks
   *
   * @event onReleaseEvent
   */
  onReleaseEvent;
  constructor(configId) {
    super(configId);
    this.log = this.log.getSubLogger({ name: "SerialConnection" });
    this.connType = "serial";
    this.portId = "";
    this.port = void 0;
    this.transformer = void 0;
    this.onReleaseEvent = new SimpleEventDispatcher3();
    this.preventLock = false;
    this.log.debug(
      Emitter[0 /* Constructor */],
      "\u{1F537} SerialConnection instantiated"
    );
  }
  /**
   * Reads packets from transformed serial port steam and processes them.
   */
  async readFromRadio(reader) {
    this.onReleaseEvent.subscribe(async () => {
      this.preventLock = true;
      await reader.cancel();
      await this.pipePromise?.catch(() => {
      });
      reader.releaseLock();
      await this.port?.close();
    });
    while (this.port?.readable && !this.preventLock) {
      await reader.read().then(({ value }) => {
        if (value) {
          this.handleFromRadio(value);
        }
      }).catch(() => {
        this.log.debug(
          Emitter[22 /* ReadFromRadio */],
          "Releasing reader"
        );
      });
    }
  }
  /** Gets list of serial ports that can be passed to `connect` */
  async getPorts() {
    return await navigator.serial.getPorts();
  }
  /**
   * Opens browsers connection dialogue to select a serial port
   */
  async getPort(filter) {
    return await navigator.serial.requestPort(filter);
  }
  getCurrentPort() {
    return this.port;
  }
  /**
   * Initiates the connect process to a Meshtastic device via Web Serial
   */
  async connect({
    port,
    baudRate = 115200,
    concurrentLogOutput = false
  }) {
    this.updateDeviceStatus(3 /* DeviceConnecting */);
    this.port = port ?? await this.getPort();
    this.port.addEventListener("disconnect", () => {
      this.log.info(
        Emitter[20 /* Connect */],
        "Device disconnected"
      );
      this.updateDeviceStatus(2 /* DeviceDisconnected */);
      this.complete();
    });
    this.preventLock = false;
    await this.port.open({
      baudRate
    }).then(() => {
      if (this.port?.readable && this.port.writable) {
        this.transformer = transformHandler(
          this.log,
          this.onReleaseEvent,
          this.events.onDeviceDebugLog,
          concurrentLogOutput
        );
        this.pipePromise = this.port.readable.pipeTo(
          this.transformer.writable
        );
        const reader = this.readerHack = this.transformer.readable.getReader();
        this.readFromRadio(reader);
        this.updateDeviceStatus(5 /* DeviceConnected */);
        this.configure().catch(() => {
        });
      } else {
        console.log("not readable or writable");
      }
    }).catch((e) => {
      this.log.error(Emitter[20 /* Connect */], `\u274C ${e.message}`);
    });
  }
  /** Disconnects from the serial port */
  async reconnect() {
    await this.connect({
      port: this.port,
      concurrentLogOutput: false
    });
  }
  /** Disconnects from the serial port */
  async disconnect() {
    this.preventLock = true;
    await this.readerHack?.cancel();
    await this.pipePromise?.catch(() => {
    });
    this.readerHack?.releaseLock();
    if (this.port?.readable) {
      await this.port?.close();
    }
    this.updateDeviceStatus(2 /* DeviceDisconnected */);
    this.complete();
    return this.port;
  }
  /** Pings device to check if it is avaliable */
  async ping() {
    return await Promise.resolve(true);
  }
  /**
   * Sends supplied protobuf message to the radio
   */
  async writeToRadio(data) {
    while (this.port?.writable?.locked) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const writer = this.port?.writable?.getWriter();
    await writer?.write(
      new Uint8Array([148, 195, 0, data.length, ...data])
    );
    writer?.releaseLock();
  }
};

// src/adapters/electronSerialConnection.ts
import { SimpleEventDispatcher as SimpleEventDispatcher4 } from "ste-simple-events";
import { ByteLengthParser, SerialPort } from "serialport";
var ElectronSerialConnection = class extends MeshDevice {
  /** Defines the connection type as serial */
  connType;
  portId;
  /** Serial port used to communicate with device. */
  port;
  readerHack;
  /** Transform stream for parsing raw serial data */
  transformer;
  /** Should locks be prevented */
  preventLock;
  /** Unfortunately, this is currently the only way to release the lock on a stream after piping it
   *  through a transform stream (https://stackoverflow.com/questions/71262432) */
  pipePromise;
  /**
   * Fires when `disconnect()` is called, used to instruct serial port and
   * readers to release there locks
   *
   * @event onReleaseEvent
   */
  onReleaseEvent;
  constructor(configId) {
    super(configId);
    this.log = this.log.getSubLogger({ name: "ElectronSerialConnection" });
    this.connType = "electron-serial";
    this.portId = "";
    this.port = void 0;
    this.transformer = void 0;
    this.onReleaseEvent = new SimpleEventDispatcher4();
    this.preventLock = false;
    this.log.debug(
      Emitter[0 /* Constructor */],
      "\u{1F537} ElectronSerialConnection instantiated"
    );
  }
  /**
   * Reads packets from transformed serial port steam and processes them.
   */
  async readFromRadio(reader) {
    this.onReleaseEvent.subscribe(async () => {
      this.preventLock = true;
      await reader.cancel();
      await this.pipePromise?.catch(() => {
      });
      reader.releaseLock();
      await this.port?.close();
    });
    while (this.port?.readable && !this.preventLock) {
      await reader.read().then(({ value }) => {
        if (value) {
          this.handleFromRadio(value);
        }
      }).catch(() => {
        this.log.debug(
          Emitter[22 /* ReadFromRadio */],
          "Releasing reader"
        );
      });
    }
  }
  /** Gets list of serial ports that can be passed to `connect` */
  async getPorts() {
    return await SerialPort.list();
  }
  getCurrentPort() {
    return this.port;
  }
  /**
   * Initiates the connect process to a Meshtastic device via Serial Port
   */
  async connect({
    path,
    baudRate = 115200,
    concurrentLogOutput = false
  }) {
    this.updateDeviceStatus(3 /* DeviceConnecting */);
    this.portId = path;
    this.port = new SerialPort({
      path,
      baudRate,
      autoOpen: false
    });
    this.port.on("close", () => {
      this.log.info(
        Emitter[20 /* Connect */],
        "Device disconnected"
      );
      this.updateDeviceStatus(2 /* DeviceDisconnected */);
      this.complete();
    });
    this.port.on("open", (err) => {
      if (err) {
        this.log.error(
          Emitter[20 /* Connect */],
          `\u274C ${err.message}`
        );
        return;
      }
      if (this.port?.readable) {
        const parser = this.port.pipe(new ByteLengthParser({ length: 8 }));
        this.transformer = transformHandler(
          this.log,
          this.onReleaseEvent,
          this.events.onDeviceDebugLog,
          concurrentLogOutput
        );
        const writer = this.transformer?.writable.getWriter();
        const reader = this.readerHack = this.transformer.readable.getReader();
        parser.on("data", (data) => {
          this.processDataStream(data, writer);
        });
        this.readFromRadio(reader);
        this.updateDeviceStatus(5 /* DeviceConnected */);
      }
    });
    this.preventLock = false;
    await this.port.open();
  }
  async processDataStream(data, writer) {
    writer?.write(data);
  }
  /** Reconnects to the serial port */
  async reconnect() {
    await this.connect({
      path: this.portId,
      concurrentLogOutput: false
    });
  }
  /** Disconnects from the serial port */
  async disconnect() {
    this.preventLock = true;
    await this.readerHack?.cancel();
    await this.pipePromise?.catch(() => {
    });
    this.readerHack?.releaseLock();
    if (this.port?.readable) {
      await this.port?.close();
    }
    this.updateDeviceStatus(2 /* DeviceDisconnected */);
    this.complete();
    return this.port;
  }
  /** Pings device to check if it is avaliable */
  async ping() {
    return await Promise.resolve(true);
  }
  /**
   * Sends supplied protobuf message to the radio
   */
  async writeToRadio(data) {
    await this.port?.write(
      new Uint8Array([148, 195, 0, data.length, ...data])
    );
  }
};

// src/client.ts
var Client = class {
  /** Array containing all created connection interfaces */
  deviceInterfaces;
  constructor() {
    this.deviceInterfaces = [];
  }
  /**
   * Creates a new Bluetooth Low Enery connection interface
   */
  createBleConnection(configId) {
    const bleConnection = new BleConnection(configId);
    this.deviceInterfaces.push(bleConnection);
    return bleConnection;
  }
  /**
   * Creates a new HTTP(S) connection interface
   */
  createHttpConnection(configId) {
    const httpConnection = new HttpConnection(configId);
    this.deviceInterfaces.push(httpConnection);
    return httpConnection;
  }
  /**
   * Creates a new Serial connection interface
   */
  createSerialConnection(configId) {
    const serialConnection = new SerialConnection(configId);
    this.deviceInterfaces.push(serialConnection);
    return serialConnection;
  }
  /**
   * Creates a new Electron Serial connection interface
   */
  createElectronSerialConnection(configId) {
    const serialConnection = new ElectronSerialConnection(configId);
    this.deviceInterfaces.push(serialConnection);
    return serialConnection;
  }
  /**
   * Adds an already created connection interface to the client
   */
  addConnection(connectionObj) {
    this.deviceInterfaces.push(connectionObj);
  }
  /**
   * Removes a connection interface from the client
   */
  removeConnection(connectionObj) {
    const index = this.deviceInterfaces.indexOf(connectionObj);
    if (index !== -1) {
      this.deviceInterfaces.splice(index, 1);
    }
  }
};

// src/index.ts
import * as Protobuf5 from "@meshtastic/protobufs";
export {
  BleConnection,
  Client,
  Constants,
  ElectronSerialConnection,
  FromNumUuid,
  FromRadioUuid,
  HttpConnection,
  MeshDevice,
  Protobuf5 as Protobuf,
  SerialConnection,
  ServiceUuid,
  ToRadioUuid,
  types_exports as Types,
  utils_exports as Utils,
  broadcastNum,
  minFwVer
};
//# sourceMappingURL=index.js.map