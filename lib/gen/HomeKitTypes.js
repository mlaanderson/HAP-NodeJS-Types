var Characteristic = {};
var Service = {};

// Known HomeKit formats
Characteristic.Formats = {
  BOOL: 'bool',
  INT: 'int',
  FLOAT: 'float',
  STRING: 'string',
  ARRAY: 'array', // unconfirmed
  DICTIONARY: 'dictionary', // unconfirmed
  UINT8: 'uint8',
  UINT16: 'uint16',
  UINT32: 'uint32',
  UINT64: 'uint64',
  DATA: 'data', // unconfirmed
  TLV8: 'tlv8'
}

// Known HomeKit unit types
Characteristic.Units = {
  // HomeKit only defines Celsius, for Fahrenheit, it requires iOS app to do the conversion.
  CELSIUS: 'celsius',
  PERCENTAGE: 'percentage',
  ARC_DEGREE: 'arcdegrees',
  LUX: 'lux',
  SECONDS: 'seconds'
}

// Known HomeKit permission types
Characteristic.Perms = {
  READ: 'pr',
  WRITE: 'pw',
  NOTIFY: 'ev',
  HIDDEN: 'hd'
}

/**
 * Characteristic "Accessory Identifier"
 */

Characteristic.AccessoryIdentifier = {
    format: Characteristic.Formats.STRING,
    perms: [Characteristic.Perms.READ]
};

Characteristic.AccessoryIdentifier.UUID = '00000057-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Administrator Only Access"
 */

Characteristic.AdministratorOnlyAccess = {
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.AdministratorOnlyAccess.UUID = '00000001-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Air Particulate Density"
 */

Characteristic.AirParticulateDensity = {
    format: Characteristic.Formats.FLOAT,
    maxValue: 1000,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.AirParticulateDensity.UUID = '00000064-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Air Particulate Size"
 */

Characteristic.AirParticulateSize = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.AirParticulateSize.UUID = '00000065-0000-1000-8000-0026BB765291';

// The value property of AirParticulateSize must be one of the following:
Characteristic.AirParticulateSize._2_5_M = 0;
Characteristic.AirParticulateSize._10_M = 1;

/**
 * Characteristic "Air Quality"
 */

Characteristic.AirQuality = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.AirQuality.UUID = '00000095-0000-1000-8000-0026BB765291';

// The value property of AirQuality must be one of the following:
Characteristic.AirQuality.UNKNOWN = 0;
Characteristic.AirQuality.EXCELLENT = 1;
Characteristic.AirQuality.GOOD = 2;
Characteristic.AirQuality.FAIR = 3;
Characteristic.AirQuality.INFERIOR = 4;
Characteristic.AirQuality.POOR = 5;

/**
 * Characteristic "Audio Feedback"
 */

Characteristic.AudioFeedback = {
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.AudioFeedback.UUID = '00000005-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Battery Level"
 */

Characteristic.BatteryLevel = {
    format: Characteristic.Formats.UINT8,
    unit: Characteristic.Units.PERCENTAGE,
    maxValue: 100,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.BatteryLevel.UUID = '00000068-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Brightness"
 */

Characteristic.Brightness = {
    format: Characteristic.Formats.INT,
    unit: Characteristic.Units.PERCENTAGE,
    maxValue: 100,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.Brightness.UUID = '00000008-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Carbon Dioxide Detected"
 */

Characteristic.CarbonDioxideDetected = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.CarbonDioxideDetected.UUID = '00000092-0000-1000-8000-0026BB765291';

// The value property of CarbonDioxideDetected must be one of the following:
Characteristic.CarbonDioxideDetected.CO2_LEVELS_NORMAL = 0;
Characteristic.CarbonDioxideDetected.CO2_LEVELS_ABNORMAL = 1;

/**
 * Characteristic "Carbon Dioxide Level"
 */

Characteristic.CarbonDioxideLevel = {
    format: Characteristic.Formats.FLOAT,
    maxValue: 100000,
    minValue: 0,
    minStep: 100,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.CarbonDioxideLevel.UUID = '00000093-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Carbon Dioxide Peak Level"
 */

Characteristic.CarbonDioxidePeakLevel = {
    format: Characteristic.Formats.FLOAT,
    maxValue: 100000,
    minValue: 0,
    minStep: 100,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.CarbonDioxidePeakLevel.UUID = '00000094-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Carbon Monoxide Detected"
 */

Characteristic.CarbonMonoxideDetected = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.CarbonMonoxideDetected.UUID = '00000069-0000-1000-8000-0026BB765291';

// The value property of CarbonMonoxideDetected must be one of the following:
Characteristic.CarbonMonoxideDetected.CO_LEVELS_NORMAL = 0;
Characteristic.CarbonMonoxideDetected.CO_LEVELS_ABNORMAL = 1;

/**
 * Characteristic "Carbon Monoxide Level"
 */

Characteristic.CarbonMonoxideLevel = {
    format: Characteristic.Formats.FLOAT,
    maxValue: 100,
    minValue: 0,
    minStep: 0.1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.CarbonMonoxideLevel.UUID = '00000090-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Carbon Monoxide Peak Level"
 */

Characteristic.CarbonMonoxidePeakLevel = {
    format: Characteristic.Formats.FLOAT,
    maxValue: 100,
    minValue: 0,
    minStep: 0.1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.CarbonMonoxidePeakLevel.UUID = '00000091-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Category"
 */

Characteristic.Category = {
    format: Characteristic.Formats.UINT16,
    maxValue: 16,
    minValue: 1,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.Category.UUID = '000000A3-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Charging State"
 */

Characteristic.ChargingState = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.ChargingState.UUID = '0000008F-0000-1000-8000-0026BB765291';

// The value property of ChargingState must be one of the following:
Characteristic.ChargingState.NOT_CHARGING = 0;
Characteristic.ChargingState.CHARGING = 1;

/**
 * Characteristic "Configure Bridged Accessory"
 */

Characteristic.ConfigureBridgedAccessory = {
    format: Characteristic.Formats.TLV8,
    perms: [Characteristic.Perms.WRITE]
};

Characteristic.ConfigureBridgedAccessory.UUID = '000000A0-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Configure Bridged Accessory Status"
 */

Characteristic.ConfigureBridgedAccessoryStatus = {
    format: Characteristic.Formats.TLV8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.ConfigureBridgedAccessoryStatus.UUID = '0000009D-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Contact Sensor State"
 */

Characteristic.ContactSensorState = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.ContactSensorState.UUID = '0000006A-0000-1000-8000-0026BB765291';

// The value property of ContactSensorState must be one of the following:
Characteristic.ContactSensorState.CONTACT_DETECTED = 0;
Characteristic.ContactSensorState.CONTACT_NOT_DETECTED = 1;

/**
 * Characteristic "Cooling Threshold Temperature"
 */

Characteristic.CoolingThresholdTemperature = {
    format: Characteristic.Formats.FLOAT,
    unit: Characteristic.Units.CELSIUS,
    maxValue: 35,
    minValue: 10,
    minStep: 0.1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.CoolingThresholdTemperature.UUID = '0000000D-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Current Ambient Light Level"
 */

Characteristic.CurrentAmbientLightLevel = {
    format: Characteristic.Formats.FLOAT,
    unit: Characteristic.Units.LUX,
    maxValue: 100000,
    minValue: 0.0001,
    minStep: 0.0001,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.CurrentAmbientLightLevel.UUID = '0000006B-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Current Door State"
 */

Characteristic.CurrentDoorState = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.CurrentDoorState.UUID = '0000000E-0000-1000-8000-0026BB765291';

// The value property of CurrentDoorState must be one of the following:
Characteristic.CurrentDoorState.OPEN = 0;
Characteristic.CurrentDoorState.CLOSED = 1;
Characteristic.CurrentDoorState.OPENING = 2;
Characteristic.CurrentDoorState.CLOSING = 3;
Characteristic.CurrentDoorState.STOPPED = 4;

/**
 * Characteristic "Current Heating Cooling State"
 */

Characteristic.CurrentHeatingCoolingState = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.CurrentHeatingCoolingState.UUID = '0000000F-0000-1000-8000-0026BB765291';

// The value property of CurrentHeatingCoolingState must be one of the following:
Characteristic.CurrentHeatingCoolingState.OFF = 0;
Characteristic.CurrentHeatingCoolingState.HEAT = 1;
Characteristic.CurrentHeatingCoolingState.COOL = 2;

/**
 * Characteristic "Current Horizontal Tilt Angle"
 */

Characteristic.CurrentHorizontalTiltAngle = {
    format: Characteristic.Formats.INT,
    unit: Characteristic.Units.ARC_DEGREE,
    maxValue: 90,
    minValue: -90,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.CurrentHorizontalTiltAngle.UUID = '0000006C-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Current Position"
 */

Characteristic.CurrentPosition = {
    format: Characteristic.Formats.UINT8,
    unit: Characteristic.Units.PERCENTAGE,
    maxValue: 100,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.CurrentPosition.UUID = '0000006D-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Current Relative Humidity"
 */

Characteristic.CurrentRelativeHumidity = {
    format: Characteristic.Formats.FLOAT,
    unit: Characteristic.Units.PERCENTAGE,
    maxValue: 100,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.CurrentRelativeHumidity.UUID = '00000010-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Current Temperature"
 */

Characteristic.CurrentTemperature = {
    format: Characteristic.Formats.FLOAT,
    unit: Characteristic.Units.CELSIUS,
    maxValue: 100,
    minValue: 0,
    minStep: 0.1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.CurrentTemperature.UUID = '00000011-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Current Time"
 */

Characteristic.CurrentTime = {
    format: Characteristic.Formats.STRING,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE]
};

Characteristic.CurrentTime.UUID = '0000009B-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Current Vertical Tilt Angle"
 */

Characteristic.CurrentVerticalTiltAngle = {
    format: Characteristic.Formats.INT,
    unit: Characteristic.Units.ARC_DEGREE,
    maxValue: 90,
    minValue: -90,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.CurrentVerticalTiltAngle.UUID = '0000006E-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Day of the Week"
 */

Characteristic.DayoftheWeek = {
    format: Characteristic.Formats.UINT8,
    maxValue: 7,
    minValue: 1,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE]
};

Characteristic.DayoftheWeek.UUID = '00000098-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Discover Bridged Accessories"
 */

Characteristic.DiscoverBridgedAccessories = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.DiscoverBridgedAccessories.UUID = '0000009E-0000-1000-8000-0026BB765291';

// The value property of DiscoverBridgedAccessories must be one of the following:
Characteristic.DiscoverBridgedAccessories.START_DISCOVERY = 0;
Characteristic.DiscoverBridgedAccessories.STOP_DISCOVERY = 1;

/**
 * Characteristic "Discovered Bridged Accessories"
 */

Characteristic.DiscoveredBridgedAccessories = {
    format: Characteristic.Formats.UINT16,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.DiscoveredBridgedAccessories.UUID = '0000009F-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Firmware Revision"
 */

Characteristic.FirmwareRevision = {
    format: Characteristic.Formats.STRING,
    perms: [Characteristic.Perms.READ]
};

Characteristic.FirmwareRevision.UUID = '00000052-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Hardware Revision"
 */

Characteristic.HardwareRevision = {
    format: Characteristic.Formats.STRING,
    perms: [Characteristic.Perms.READ]
};

Characteristic.HardwareRevision.UUID = '00000053-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Heating Threshold Temperature"
 */

Characteristic.HeatingThresholdTemperature = {
    format: Characteristic.Formats.FLOAT,
    unit: Characteristic.Units.CELSIUS,
    maxValue: 25,
    minValue: 0,
    minStep: 0.1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.HeatingThresholdTemperature.UUID = '00000012-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Hold Position"
 */

Characteristic.HoldPosition = {
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.WRITE]
};

Characteristic.HoldPosition.UUID = '0000006F-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Hue"
 */

Characteristic.Hue = {
    format: Characteristic.Formats.FLOAT,
    unit: Characteristic.Units.ARC_DEGREE,
    maxValue: 360,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.Hue.UUID = '00000013-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Identify"
 */

Characteristic.Identify = {
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.WRITE]
};

Characteristic.Identify.UUID = '00000014-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Leak Detected"
 */

Characteristic.LeakDetected = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.LeakDetected.UUID = '00000070-0000-1000-8000-0026BB765291';

// The value property of LeakDetected must be one of the following:
Characteristic.LeakDetected.LEAK_NOT_DETECTED = 0;
Characteristic.LeakDetected.LEAK_DETECTED = 1;

/**
 * Characteristic "Link Quality"
 */

Characteristic.LinkQuality = {
    format: Characteristic.Formats.UINT8,
    maxValue: 4,
    minValue: 1,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.LinkQuality.UUID = '0000009C-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Lock Control Point"
 */

Characteristic.LockControlPoint = {
    format: Characteristic.Formats.TLV8,
    perms: [Characteristic.Perms.WRITE]
};

Characteristic.LockControlPoint.UUID = '00000019-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Lock Current State"
 */

Characteristic.LockCurrentState = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.LockCurrentState.UUID = '0000001D-0000-1000-8000-0026BB765291';

// The value property of LockCurrentState must be one of the following:
Characteristic.LockCurrentState.UNSECURED = 0;
Characteristic.LockCurrentState.SECURED = 1;
Characteristic.LockCurrentState.JAMMED = 2;
Characteristic.LockCurrentState.UNKNOWN = 3;

/**
 * Characteristic "Lock Last Known Action"
 */

Characteristic.LockLastKnownAction = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.LockLastKnownAction.UUID = '0000001C-0000-1000-8000-0026BB765291';

// The value property of LockLastKnownAction must be one of the following:
Characteristic.LockLastKnownAction.SECURED_PHYSICALLY_INTERIOR = 0;
Characteristic.LockLastKnownAction.UNSECURED_PHYSICALLY_INTERIOR = 1;
Characteristic.LockLastKnownAction.SECURED_PHYSICALLY_EXTERIOR = 2;
Characteristic.LockLastKnownAction.UNSECURED_PHYSICALLY_EXTERIOR = 3;
Characteristic.LockLastKnownAction.SECURED_BY_KEYPAD = 4;
Characteristic.LockLastKnownAction.UNSECURED_BY_KEYPAD = 5;
Characteristic.LockLastKnownAction.SECURED_REMOTELY = 6;
Characteristic.LockLastKnownAction.UNSECURED_REMOTELY = 7;
Characteristic.LockLastKnownAction.SECURED_BY_AUTO_SECURE_TIMEOUT = 8;

/**
 * Characteristic "Lock Management Auto Security Timeout"
 */

Characteristic.LockManagementAutoSecurityTimeout = {
    format: Characteristic.Formats.UINT32,
    unit: Characteristic.Units.SECONDS,
    maxValue: 86400,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.LockManagementAutoSecurityTimeout.UUID = '0000001A-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Lock Target State"
 */

Characteristic.LockTargetState = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.LockTargetState.UUID = '0000001E-0000-1000-8000-0026BB765291';

// The value property of LockTargetState must be one of the following:
Characteristic.LockTargetState.UNSECURED = 0;
Characteristic.LockTargetState.SECURED = 1;

/**
 * Characteristic "Logs"
 */

Characteristic.Logs = {
    format: Characteristic.Formats.TLV8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.Logs.UUID = '0000001F-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Manufacturer"
 */

Characteristic.Manufacturer = {
    format: Characteristic.Formats.STRING,
    perms: [Characteristic.Perms.READ]
};

Characteristic.Manufacturer.UUID = '00000020-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Model"
 */

Characteristic.Model = {
    format: Characteristic.Formats.STRING,
    perms: [Characteristic.Perms.READ]
};

Characteristic.Model.UUID = '00000021-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Motion Detected"
 */

Characteristic.MotionDetected = {
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.MotionDetected.UUID = '00000022-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Name"
 */

Characteristic.Name = {
    format: Characteristic.Formats.STRING,
    perms: [Characteristic.Perms.READ]
};

Characteristic.Name.UUID = '00000023-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Obstruction Detected"
 */

Characteristic.ObstructionDetected = {
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.ObstructionDetected.UUID = '00000024-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Occupancy Detected"
 */

Characteristic.OccupancyDetected = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.OccupancyDetected.UUID = '00000071-0000-1000-8000-0026BB765291';

// The value property of OccupancyDetected must be one of the following:
Characteristic.OccupancyDetected.OCCUPANCY_NOT_DETECTED = 0;
Characteristic.OccupancyDetected.OCCUPANCY_DETECTED = 1;

/**
 * Characteristic "On"
 */

Characteristic.On = {
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.On.UUID = '00000025-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Outlet In Use"
 */

Characteristic.OutletInUse = {
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.OutletInUse.UUID = '00000026-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Pair Setup"
 */

Characteristic.PairSetup = {
    format: Characteristic.Formats.TLV8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE]
};

Characteristic.PairSetup.UUID = '0000004C-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Pair Verify"
 */

Characteristic.PairVerify = {
    format: Characteristic.Formats.TLV8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE]
};

Characteristic.PairVerify.UUID = '0000004E-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Pairing Features"
 */

Characteristic.PairingFeatures = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ]
};

Characteristic.PairingFeatures.UUID = '0000004F-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Pairing Pairings"
 */

Characteristic.PairingPairings = {
    format: Characteristic.Formats.TLV8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE]
};

Characteristic.PairingPairings.UUID = '00000050-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Position State"
 */

Characteristic.PositionState = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.PositionState.UUID = '00000072-0000-1000-8000-0026BB765291';

// The value property of PositionState must be one of the following:
Characteristic.PositionState.DECREASING = 0;
Characteristic.PositionState.INCREASING = 1;
Characteristic.PositionState.STOPPED = 2;

/**
 * Characteristic "Programmable Switch Event"
 */

Characteristic.ProgrammableSwitchEvent = {
    format: Characteristic.Formats.UINT8,
    maxValue: 1,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.ProgrammableSwitchEvent.UUID = '00000073-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Programmable Switch Output State"
 */

Characteristic.ProgrammableSwitchOutputState = {
    format: Characteristic.Formats.UINT8,
    maxValue: 1,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.ProgrammableSwitchOutputState.UUID = '00000074-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Reachable"
 */

Characteristic.Reachable = {
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.Reachable.UUID = '00000063-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Rotation Direction"
 */

Characteristic.RotationDirection = {
    format: Characteristic.Formats.INT,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.RotationDirection.UUID = '00000028-0000-1000-8000-0026BB765291';

// The value property of RotationDirection must be one of the following:
Characteristic.RotationDirection.CLOCKWISE = 0;
Characteristic.RotationDirection.COUNTER_CLOCKWISE = 1;

/**
 * Characteristic "Rotation Speed"
 */

Characteristic.RotationSpeed = {
    format: Characteristic.Formats.FLOAT,
    unit: Characteristic.Units.PERCENTAGE,
    maxValue: 100,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.RotationSpeed.UUID = '00000029-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Saturation"
 */

Characteristic.Saturation = {
    format: Characteristic.Formats.FLOAT,
    unit: Characteristic.Units.PERCENTAGE,
    maxValue: 100,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.Saturation.UUID = '0000002F-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Security System Alarm Type"
 */

Characteristic.SecuritySystemAlarmType = {
    format: Characteristic.Formats.UINT8,
    maxValue: 1,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.SecuritySystemAlarmType.UUID = '0000008E-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Security System Current State"
 */

Characteristic.SecuritySystemCurrentState = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.SecuritySystemCurrentState.UUID = '00000066-0000-1000-8000-0026BB765291';

// The value property of SecuritySystemCurrentState must be one of the following:
Characteristic.SecuritySystemCurrentState.STAY_ARM = 0;
Characteristic.SecuritySystemCurrentState.AWAY_ARM = 1;
Characteristic.SecuritySystemCurrentState.NIGHT_ARM = 2;
Characteristic.SecuritySystemCurrentState.DISARMED = 3;
Characteristic.SecuritySystemCurrentState.ALARM_TRIGGERED = 4;

/**
 * Characteristic "Security System Target State"
 */

Characteristic.SecuritySystemTargetState = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.SecuritySystemTargetState.UUID = '00000067-0000-1000-8000-0026BB765291';

// The value property of SecuritySystemTargetState must be one of the following:
Characteristic.SecuritySystemTargetState.STAY_ARM = 0;
Characteristic.SecuritySystemTargetState.AWAY_ARM = 1;
Characteristic.SecuritySystemTargetState.NIGHT_ARM = 2;
Characteristic.SecuritySystemTargetState.DISARM = 3;

/**
 * Characteristic "Serial Number"
 */

Characteristic.SerialNumber = {
    format: Characteristic.Formats.STRING,
    perms: [Characteristic.Perms.READ]
};

Characteristic.SerialNumber.UUID = '00000030-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Smoke Detected"
 */

Characteristic.SmokeDetected = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.SmokeDetected.UUID = '00000076-0000-1000-8000-0026BB765291';

// The value property of SmokeDetected must be one of the following:
Characteristic.SmokeDetected.SMOKE_NOT_DETECTED = 0;
Characteristic.SmokeDetected.SMOKE_DETECTED = 1;

/**
 * Characteristic "Software Revision"
 */

Characteristic.SoftwareRevision = {
    format: Characteristic.Formats.STRING,
    perms: [Characteristic.Perms.READ]
};

Characteristic.SoftwareRevision.UUID = '00000054-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Status Active"
 */

Characteristic.StatusActive = {
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.StatusActive.UUID = '00000075-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Status Fault"
 */

Characteristic.StatusFault = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.StatusFault.UUID = '00000077-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Status Jammed"
 */

Characteristic.StatusJammed = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.StatusJammed.UUID = '00000078-0000-1000-8000-0026BB765291';

// The value property of StatusJammed must be one of the following:
Characteristic.StatusJammed.NOT_JAMMED = 0;
Characteristic.StatusJammed.JAMMED = 1;

/**
 * Characteristic "Status Low Battery"
 */

Characteristic.StatusLowBattery = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.StatusLowBattery.UUID = '00000079-0000-1000-8000-0026BB765291';

// The value property of StatusLowBattery must be one of the following:
Characteristic.StatusLowBattery.BATTERY_LEVEL_NORMAL = 0;
Characteristic.StatusLowBattery.BATTERY_LEVEL_LOW = 1;

/**
 * Characteristic "Status Tampered"
 */

Characteristic.StatusTampered = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.StatusTampered.UUID = '0000007A-0000-1000-8000-0026BB765291';

// The value property of StatusTampered must be one of the following:
Characteristic.StatusTampered.NOT_TAMPERED = 0;
Characteristic.StatusTampered.TAMPERED = 1;

/**
 * Characteristic "Target Door State"
 */

Characteristic.TargetDoorState = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.TargetDoorState.UUID = '00000032-0000-1000-8000-0026BB765291';

// The value property of TargetDoorState must be one of the following:
Characteristic.TargetDoorState.OPEN = 0;
Characteristic.TargetDoorState.CLOSED = 1;

/**
 * Characteristic "Target Heating Cooling State"
 */

Characteristic.TargetHeatingCoolingState = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.TargetHeatingCoolingState.UUID = '00000033-0000-1000-8000-0026BB765291';

// The value property of TargetHeatingCoolingState must be one of the following:
Characteristic.TargetHeatingCoolingState.OFF = 0;
Characteristic.TargetHeatingCoolingState.HEAT = 1;
Characteristic.TargetHeatingCoolingState.COOL = 2;
Characteristic.TargetHeatingCoolingState.AUTO = 3;

/**
 * Characteristic "Target Horizontal Tilt Angle"
 */

Characteristic.TargetHorizontalTiltAngle = {
    format: Characteristic.Formats.INT,
    unit: Characteristic.Units.ARC_DEGREE,
    maxValue: 90,
    minValue: -90,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.TargetHorizontalTiltAngle.UUID = '0000007B-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Target Position"
 */

Characteristic.TargetPosition = {
    format: Characteristic.Formats.UINT8,
    unit: Characteristic.Units.PERCENTAGE,
    maxValue: 100,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.TargetPosition.UUID = '0000007C-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Target Relative Humidity"
 */

Characteristic.TargetRelativeHumidity = {
    format: Characteristic.Formats.FLOAT,
    unit: Characteristic.Units.PERCENTAGE,
    maxValue: 100,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.TargetRelativeHumidity.UUID = '00000034-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Target Temperature"
 */

Characteristic.TargetTemperature = {
    format: Characteristic.Formats.FLOAT,
    unit: Characteristic.Units.CELSIUS,
    maxValue: 38,
    minValue: 10,
    minStep: 0.1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.TargetTemperature.UUID = '00000035-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Target Vertical Tilt Angle"
 */

Characteristic.TargetVerticalTiltAngle = {
    format: Characteristic.Formats.INT,
    unit: Characteristic.Units.ARC_DEGREE,
    maxValue: 90,
    minValue: -90,
    minStep: 1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.TargetVerticalTiltAngle.UUID = '0000007D-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Temperature Display Units"
 */

Characteristic.TemperatureDisplayUnits = {
    format: Characteristic.Formats.UINT8,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
};

Characteristic.TemperatureDisplayUnits.UUID = '00000036-0000-1000-8000-0026BB765291';

// The value property of TemperatureDisplayUnits must be one of the following:
Characteristic.TemperatureDisplayUnits.CELSIUS = 0;
Characteristic.TemperatureDisplayUnits.FAHRENHEIT = 1;

/**
 * Characteristic "Time Update"
 */

Characteristic.TimeUpdate = {
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.TimeUpdate.UUID = '0000009A-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Tunnel Connection Timeout "
 */

Characteristic.TunnelConnectionTimeout = {
    format: Characteristic.Formats.UINT32,
    perms: [Characteristic.Perms.WRITE, Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.TunnelConnectionTimeout.UUID = '00000061-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Tunneled Accessory Advertising"
 */

Characteristic.TunneledAccessoryAdvertising = {
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.WRITE, Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.TunneledAccessoryAdvertising.UUID = '00000060-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Tunneled Accessory Connected"
 */

Characteristic.TunneledAccessoryConnected = {
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.WRITE, Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.TunneledAccessoryConnected.UUID = '00000059-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Tunneled Accessory State Number"
 */

Characteristic.TunneledAccessoryStateNumber = {
    format: Characteristic.Formats.FLOAT,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.TunneledAccessoryStateNumber.UUID = '00000058-0000-1000-8000-0026BB765291';

/**
 * Characteristic "Version"
 */

Characteristic.Version = {
    format: Characteristic.Formats.STRING,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
};

Characteristic.Version.UUID = '00000037-0000-1000-8000-0026BB765291';

/**
 * Service "Accessory Information"
 */

Service.AccessoryInformation = {
  // Required Characteristics
  Characteristics: [
    "Identify",
    "Manufacturer",
    "Model",
    "Name",
    "SerialNumber",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "FirmwareRevision",
    "HardwareRevision",
    "SoftwareRevision",
  ]
};

Service.AccessoryInformation.UUID = '0000003E-0000-1000-8000-0026BB765291';

/**
 * Service "Air Quality Sensor"
 */

Service.AirQualitySensor = {
  // Required Characteristics
  Characteristics: [
    "AirQuality",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "AirParticulateDensity",
    "AirParticulateSize",
    "StatusActive",
    "StatusFault",
    "StatusTampered",
    "StatusLowBattery",
    "Name",
  ]
};

Service.AirQualitySensor.UUID = '0000008D-0000-1000-8000-0026BB765291';

/**
 * Service "Battery Service"
 */

Service.BatteryService = {
  // Required Characteristics
  Characteristics: [
    "BatteryLevel",
    "ChargingState",
    "StatusLowBattery",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "Name",
  ]
};

Service.BatteryService.UUID = '00000096-0000-1000-8000-0026BB765291';

/**
 * Service "Bridge Configuration"
 */

Service.BridgeConfiguration = {
  // Required Characteristics
  Characteristics: [
    "ConfigureBridgedAccessoryStatus",
    "DiscoverBridgedAccessories",
    "DiscoveredBridgedAccessories",
    "ConfigureBridgedAccessory",
  ],

  // Optional Characteristics
  OptionalCharacteristics: []
};

Service.BridgeConfiguration.UUID = '000000A1-0000-1000-8000-0026BB765291';

/**
 * Service "Bridging State"
 */

Service.BridgingState = {
  // Required Characteristics
  Characteristics: [
    "Reachable",
    "LinkQuality",
    "AccessoryIdentifier",
    "Category",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "Name",
  ]
};

Service.BridgingState.UUID = '00000062-0000-1000-8000-0026BB765291';

/**
 * Service "Carbon Dioxide Sensor"
 */

Service.CarbonDioxideSensor = {
  // Required Characteristics
  Characteristics: [
    "CarbonDioxideDetected",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "StatusActive",
    "StatusFault",
    "StatusLowBattery",
    "StatusTampered",
    "CarbonDioxideLevel",
    "CarbonDioxidePeakLevel",
    "Name",
  ]
};

Service.CarbonDioxideSensor.UUID = '00000097-0000-1000-8000-0026BB765291';

/**
 * Service "Carbon Monoxide Sensor"
 */

Service.CarbonMonoxideSensor = {
  // Required Characteristics
  Characteristics: [
    "CarbonMonoxideDetected",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "StatusActive",
    "StatusFault",
    "StatusLowBattery",
    "StatusTampered",
    "CarbonMonoxideLevel",
    "CarbonMonoxidePeakLevel",
    "Name",
  ]
};

Service.CarbonMonoxideSensor.UUID = '0000007F-0000-1000-8000-0026BB765291';

/**
 * Service "Contact Sensor"
 */

Service.ContactSensor = {
  // Required Characteristics
  Characteristics: [
    "ContactSensorState",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "StatusActive",
    "StatusFault",
    "StatusTampered",
    "StatusLowBattery",
    "Name",
  ]
};

Service.ContactSensor.UUID = '00000080-0000-1000-8000-0026BB765291';

/**
 * Service "Door"
 */

Service.Door = {
  // Required Characteristics
  Characteristics: [
    "CurrentPosition",
    "PositionState",
    "TargetPosition",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "HoldPosition",
    "ObstructionDetected",
    "Name",
  ]
};

Service.Door.UUID = '00000081-0000-1000-8000-0026BB765291';

/**
 * Service "Fan"
 */

Service.Fan = {
  // Required Characteristics
  Characteristics: [
    "On",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "RotationDirection",
    "RotationSpeed",
    "Name",
  ]
};

Service.Fan.UUID = '00000040-0000-1000-8000-0026BB765291';

/**
 * Service "Garage Door Opener"
 */

Service.GarageDoorOpener = {
  // Required Characteristics
  Characteristics: [
    "CurrentDoorState",
    "TargetDoorState",
    "ObstructionDetected",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "LockCurrentState",
    "LockTargetState",
    "Name",
  ]
};

Service.GarageDoorOpener.UUID = '00000041-0000-1000-8000-0026BB765291';

/**
 * Service "Humidity Sensor"
 */

Service.HumiditySensor = {
  // Required Characteristics
  Characteristics: [
    "CurrentRelativeHumidity",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "StatusActive",
    "StatusFault",
    "StatusTampered",
    "StatusLowBattery",
    "Name",
  ]
};

Service.HumiditySensor.UUID = '00000082-0000-1000-8000-0026BB765291';

/**
 * Service "Leak Sensor"
 */

Service.LeakSensor = {
  // Required Characteristics
  Characteristics: [
    "LeakDetected",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "StatusActive",
    "StatusFault",
    "StatusTampered",
    "StatusLowBattery",
    "Name",
  ]
};

Service.LeakSensor.UUID = '00000083-0000-1000-8000-0026BB765291';

/**
 * Service "Light Sensor"
 */

Service.LightSensor = {
  // Required Characteristics
  Characteristics: [
    "CurrentAmbientLightLevel",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "StatusActive",
    "StatusFault",
    "StatusTampered",
    "StatusLowBattery",
    "Name",
  ]
};

Service.LightSensor.UUID = '00000084-0000-1000-8000-0026BB765291';

/**
 * Service "Lightbulb"
 */

Service.Lightbulb = {
  // Required Characteristics
  Characteristics: [
    "On",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "Brightness",
    "Hue",
    "Saturation",
    "Name",
  ]
};

Service.Lightbulb.UUID = '00000043-0000-1000-8000-0026BB765291';

/**
 * Service "Lock Management"
 */

Service.LockManagement = {
  // Required Characteristics
  Characteristics: [
    "LockControlPoint",
    "Version",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "Logs",
    "AudioFeedback",
    "LockManagementAutoSecurityTimeout",
    "AdministratorOnlyAccess",
    "LockLastKnownAction",
    "CurrentDoorState",
    "MotionDetected",
    "Name",
  ]
};

Service.LockManagement.UUID = '00000044-0000-1000-8000-0026BB765291';

/**
 * Service "Lock Mechanism"
 */

Service.LockMechanism = {
  // Required Characteristics
  Characteristics: [
    "LockCurrentState",
    "LockTargetState",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "Name",
  ]
};

Service.LockMechanism.UUID = '00000045-0000-1000-8000-0026BB765291';

/**
 * Service "Motion Sensor"
 */

Service.MotionSensor = {
  // Required Characteristics
  Characteristics: [
    "MotionDetected",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "StatusActive",
    "StatusFault",
    "StatusTampered",
    "StatusLowBattery",
    "Name",
  ]
};

Service.MotionSensor.UUID = '00000085-0000-1000-8000-0026BB765291';

/**
 * Service "Occupancy Sensor"
 */

Service.OccupancySensor = {
  // Required Characteristics
  Characteristics: [
    "OccupancyDetected",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "StatusActive",
    "StatusFault",
    "StatusTampered",
    "StatusLowBattery",
    "Name",
  ]
};

Service.OccupancySensor.UUID = '00000086-0000-1000-8000-0026BB765291';

/**
 * Service "Outlet"
 */

Service.Outlet = {
  // Required Characteristics
  Characteristics: [
    "On",
    "OutletInUse",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "Name",
  ]
};

Service.Outlet.UUID = '00000047-0000-1000-8000-0026BB765291';

/**
 * Service "Security System"
 */

Service.SecuritySystem = {
  // Required Characteristics
  Characteristics: [
    "SecuritySystemCurrentState",
    "SecuritySystemTargetState",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "StatusFault",
    "StatusTampered",
    "SecuritySystemAlarmType",
    "Name",
  ]
};

Service.SecuritySystem.UUID = '0000007E-0000-1000-8000-0026BB765291';

/**
 * Service "Smoke Sensor"
 */

Service.SmokeSensor = {
  // Required Characteristics
  Characteristics: [
    "SmokeDetected",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "StatusActive",
    "StatusFault",
    "StatusTampered",
    "StatusLowBattery",
    "Name",
  ]
};

Service.SmokeSensor.UUID = '00000087-0000-1000-8000-0026BB765291';

/**
 * Service "Stateful Programmable Switch"
 */

Service.StatefulProgrammableSwitch = {
  // Required Characteristics
  Characteristics: [
    "ProgrammableSwitchEvent",
    "ProgrammableSwitchOutputState",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "Name",
  ]
};

Service.StatefulProgrammableSwitch.UUID = '00000088-0000-1000-8000-0026BB765291';

/**
 * Service "Stateless Programmable Switch"
 */

Service.StatelessProgrammableSwitch = {
  // Required Characteristics
  Characteristics: [
    "ProgrammableSwitchEvent",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "Name",
  ]
};

Service.StatelessProgrammableSwitch.UUID = '00000089-0000-1000-8000-0026BB765291';

/**
 * Service "Switch"
 */

Service.Switch = {
  // Required Characteristics
  Characteristics: [
    "On",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "Name",
  ]
};

Service.Switch.UUID = '00000049-0000-1000-8000-0026BB765291';

/**
 * Service "Temperature Sensor"
 */

Service.TemperatureSensor = {
  // Required Characteristics
  Characteristics: [
    "CurrentTemperature",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "StatusActive",
    "StatusFault",
    "StatusLowBattery",
    "StatusTampered",
    "Name",
  ]
};

Service.TemperatureSensor.UUID = '0000008A-0000-1000-8000-0026BB765291';

/**
 * Service "Thermostat"
 */

Service.Thermostat = {
  // Required Characteristics
  Characteristics: [
    "CurrentHeatingCoolingState",
    "TargetHeatingCoolingState",
    "CurrentTemperature",
    "TargetTemperature",
    "TemperatureDisplayUnits",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "CurrentRelativeHumidity",
    "TargetRelativeHumidity",
    "CoolingThresholdTemperature",
    "HeatingThresholdTemperature",
    "Name",
  ]
};

Service.Thermostat.UUID = '0000004A-0000-1000-8000-0026BB765291';

/**
 * Service "Time Information"
 */

Service.TimeInformation = {
  // Required Characteristics
  Characteristics: [
    "CurrentTime",
    "DayoftheWeek",
    "TimeUpdate",
  ],

  // Optional Characteristics
  OptionalCharacteristics: []
};

Service.TimeInformation.UUID = '00000099-0000-1000-8000-0026BB765291';

/**
 * Service "Tunneled BTLE Accessory Service"
 */

Service.TunneledBTLEAccessoryService = {
  // Required Characteristics
  Characteristics: [
    "Name",
    "AccessoryIdentifier",
    "TunneledAccessoryStateNumber",
    "TunneledAccessoryConnected",
    "TunneledAccessoryAdvertising",
    "TunnelConnectionTimeout",
  ],

  // Optional Characteristics
  OptionalCharacteristics: []
};

Service.TunneledBTLEAccessoryService.UUID = '00000056-0000-1000-8000-0026BB765291';

/**
 * Service "Window"
 */

Service.Window = {
  // Required Characteristics
  Characteristics: [
    "CurrentPosition",
    "TargetPosition",
    "PositionState",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "HoldPosition",
    "ObstructionDetected",
    "Name",
  ]
};

Service.Window.UUID = '0000008B-0000-1000-8000-0026BB765291';

/**
 * Service "Window Covering"
 */

Service.WindowCovering = {
  // Required Characteristics
  Characteristics: [
    "CurrentPosition",
    "TargetPosition",
    "PositionState",
  ],

  // Optional Characteristics
  OptionalCharacteristics: [
    "HoldPosition",
    "TargetHorizontalTiltAngle",
    "TargetVerticalTiltAngle",
    "CurrentHorizontalTiltAngle",
    "CurrentVerticalTiltAngle",
    "ObstructionDetected",
    "Name",
  ]
};

Service.WindowCovering.UUID = '0000008C-0000-1000-8000-0026BB765291';

module.exports = {
    Service: Service,
    Characteristic: Characteristic
}