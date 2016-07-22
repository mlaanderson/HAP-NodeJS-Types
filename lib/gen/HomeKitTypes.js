/**
 * @summary Known HomeKit formats
 *
 * These formats define the value types of a characteristic.
 *
 * @property {string} BOOL - A bool
 * @property {string} INT - An int
 * @property {string} FLOAT - A float
 * @property {string} STRING - A string
 * @property {string} ARRAY - An array
 * @property {string} DICTIONARY - A dictionary
 * @property {string} UINT8 - An uint8
 * @property {string} UINT16 - An uint16
 * @property {string} UINT32 - An uint32
 * @property {string} UINT64 - An uint64
 * @property {string} DATA - A data
 * @property {string} TLV8 - A tlv8
 */
var Formats = {
    BOOL: 'bool',
    INT: 'int',
    FLOAT: 'float',
    STRING: 'string',
    ARRAY: 'array',
    DICTIONARY: 'dictionary',
    UINT8: 'uint8',
    UINT16: 'uint16',
    UINT32: 'uint32',
    UINT64: 'uint64',
    DATA: 'data',
    TLV8: 'tlv8',
};

/**
 * @summary Known HomeKit unit types
 *
 * These units define the unit of a given characteristic.
 * These do not define the value type, just the units of the value.
 *
 * @property {string} CELSIUS - Units are celsius.
 * @property {string} PERCENTAGE - Units are percentage.
 * @property {string} ARC_DEGREE - Units are arcdegrees.
 * @property {string} LUX - Units are lux.
 * @property {string} SECONDS - Units are seconds.
 */
var Units = {
    CELSIUS: 'celsius',
    PERCENTAGE: 'percentage',
    ARC_DEGREE: 'arcdegrees',
    LUX: 'lux',
    SECONDS: 'seconds',
};

/** @summary Known HomeKit permission types
 *
 * These permissions define the permissions on the client side of the
 * database. A widget would invert the permissions.
 *
 * @property {string} READ - Clients can read.
 * @property {string} WRITE - Clients can write.
 * @property {string} NOTIFY - Clients can be notified.
 * @property {string} HIDDEN - This characteristic is hidden from clients.
 */
var Perms = {
    READ: 'pr',
    WRITE: 'pw',
    NOTIFY: 'ev',
    HIDDEN: 'hd',
};

/**
 * @summary Characteristic "Accessory Identifier".
 * 
 * 
 * 
 * @property {Formats} format - STRING
 * @property {Perms} perms - [Perms.READ]
 * @property {string} UUID - 00000057-0000-1000-8000-0026BB765291
 */
var AccessoryIdentifier = {
    format : Formats.STRING,
    perms : [Perms.READ],
    UUID : "00000057-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Administrator Only Access".
 * 
 * 
 * 
 * @property {Formats} format - BOOL
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000001-0000-1000-8000-0026BB765291
 */
var AdministratorOnlyAccess = {
    format : Formats.BOOL,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000001-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Air Particulate Density".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {number} maxValue - 1000
 * @property {number} minValue - 0
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000064-0000-1000-8000-0026BB765291
 */
var AirParticulateDensity = {
    format : Formats.FLOAT,
    maxValue : 1000,
    minValue : 0,
    minStep : 1,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000064-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Air Particulate Size".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000065-0000-1000-8000-0026BB765291
 * @property {number} _2_5_M - 0
 * @property {number} _10_M - 1
 */
var AirParticulateSize = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000065-0000-1000-8000-0026BB765291",
    _2_5_M : 0,
    _10_M : 1,
};

/**
 * @summary Characteristic "Air Quality".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000095-0000-1000-8000-0026BB765291
 * @property {number} UNKNOWN - 0
 * @property {number} EXCELLENT - 1
 * @property {number} GOOD - 2
 * @property {number} FAIR - 3
 * @property {number} INFERIOR - 4
 * @property {number} POOR - 5
 */
var AirQuality = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000095-0000-1000-8000-0026BB765291",
    UNKNOWN : 0,
    EXCELLENT : 1,
    GOOD : 2,
    FAIR : 3,
    INFERIOR : 4,
    POOR : 5,
};

/**
 * @summary Characteristic "Audio Feedback".
 * 
 * 
 * 
 * @property {Formats} format - BOOL
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000005-0000-1000-8000-0026BB765291
 */
var AudioFeedback = {
    format : Formats.BOOL,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000005-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Battery Level".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {string} unit - percentage
 * @property {number} maxValue - 100
 * @property {number} minValue - 0
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000068-0000-1000-8000-0026BB765291
 */
var BatteryLevel = {
    format : Formats.UINT8,
    unit : "percentage",
    maxValue : 100,
    minValue : 0,
    minStep : 1,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000068-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Brightness".
 * 
 * 
 * 
 * @property {Formats} format - INT
 * @property {string} unit - percentage
 * @property {number} maxValue - 100
 * @property {number} minValue - 0
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000008-0000-1000-8000-0026BB765291
 */
var Brightness = {
    format : Formats.INT,
    unit : "percentage",
    maxValue : 100,
    minValue : 0,
    minStep : 1,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000008-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Carbon Dioxide Detected".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000092-0000-1000-8000-0026BB765291
 * @property {number} CO2_LEVELS_NORMAL - 0
 * @property {number} CO2_LEVELS_ABNORMAL - 1
 */
var CarbonDioxideDetected = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000092-0000-1000-8000-0026BB765291",
    CO2_LEVELS_NORMAL : 0,
    CO2_LEVELS_ABNORMAL : 1,
};

/**
 * @summary Characteristic "Carbon Dioxide Level".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {number} maxValue - 100000
 * @property {number} minValue - 0
 * @property {number} minStep - 100
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000093-0000-1000-8000-0026BB765291
 */
var CarbonDioxideLevel = {
    format : Formats.FLOAT,
    maxValue : 100000,
    minValue : 0,
    minStep : 100,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000093-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Carbon Dioxide Peak Level".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {number} maxValue - 100000
 * @property {number} minValue - 0
 * @property {number} minStep - 100
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000094-0000-1000-8000-0026BB765291
 */
var CarbonDioxidePeakLevel = {
    format : Formats.FLOAT,
    maxValue : 100000,
    minValue : 0,
    minStep : 100,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000094-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Carbon Monoxide Detected".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000069-0000-1000-8000-0026BB765291
 * @property {number} CO_LEVELS_NORMAL - 0
 * @property {number} CO_LEVELS_ABNORMAL - 1
 */
var CarbonMonoxideDetected = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000069-0000-1000-8000-0026BB765291",
    CO_LEVELS_NORMAL : 0,
    CO_LEVELS_ABNORMAL : 1,
};

/**
 * @summary Characteristic "Carbon Monoxide Level".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {number} maxValue - 100
 * @property {number} minValue - 0
 * @property {number} minStep - 0.1
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000090-0000-1000-8000-0026BB765291
 */
var CarbonMonoxideLevel = {
    format : Formats.FLOAT,
    maxValue : 100,
    minValue : 0,
    minStep : 0.1,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000090-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Carbon Monoxide Peak Level".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {number} maxValue - 100
 * @property {number} minValue - 0
 * @property {number} minStep - 0.1
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000091-0000-1000-8000-0026BB765291
 */
var CarbonMonoxidePeakLevel = {
    format : Formats.FLOAT,
    maxValue : 100,
    minValue : 0,
    minStep : 0.1,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000091-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Category".
 * 
 * 
 * 
 * @property {Formats} format - UINT16
 * @property {number} maxValue - 16
 * @property {number} minValue - 1
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 000000A3-0000-1000-8000-0026BB765291
 */
var Category = {
    format : Formats.UINT16,
    maxValue : 16,
    minValue : 1,
    minStep : 1,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "000000A3-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Charging State".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000008F-0000-1000-8000-0026BB765291
 * @property {number} NOT_CHARGING - 0
 * @property {number} CHARGING - 1
 */
var ChargingState = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000008F-0000-1000-8000-0026BB765291",
    NOT_CHARGING : 0,
    CHARGING : 1,
};

/**
 * @summary Characteristic "Configure Bridged Accessory".
 * 
 * 
 * 
 * @property {Formats} format - TLV8
 * @property {Perms} perms - [Perms.WRITE]
 * @property {string} UUID - 000000A0-0000-1000-8000-0026BB765291
 */
var ConfigureBridgedAccessory = {
    format : Formats.TLV8,
    perms : [Perms.WRITE],
    UUID : "000000A0-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Configure Bridged Accessory Status".
 * 
 * 
 * 
 * @property {Formats} format - TLV8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000009D-0000-1000-8000-0026BB765291
 */
var ConfigureBridgedAccessoryStatus = {
    format : Formats.TLV8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000009D-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Contact Sensor State".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000006A-0000-1000-8000-0026BB765291
 * @property {number} CONTACT_DETECTED - 0
 * @property {number} CONTACT_NOT_DETECTED - 1
 */
var ContactSensorState = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000006A-0000-1000-8000-0026BB765291",
    CONTACT_DETECTED : 0,
    CONTACT_NOT_DETECTED : 1,
};

/**
 * @summary Characteristic "Cooling Threshold Temperature".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {string} unit - celsius
 * @property {number} maxValue - 35
 * @property {number} minValue - 10
 * @property {number} minStep - 0.1
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 0000000D-0000-1000-8000-0026BB765291
 */
var CoolingThresholdTemperature = {
    format : Formats.FLOAT,
    unit : "celsius",
    maxValue : 35,
    minValue : 10,
    minStep : 0.1,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "0000000D-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Current Ambient Light Level".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {string} unit - lux
 * @property {number} maxValue - 100000
 * @property {number} minValue - 0.0001
 * @property {number} minStep - 0.0001
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000006B-0000-1000-8000-0026BB765291
 */
var CurrentAmbientLightLevel = {
    format : Formats.FLOAT,
    unit : "lux",
    maxValue : 100000,
    minValue : 0.0001,
    minStep : 0.0001,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000006B-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Current Door State".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000000E-0000-1000-8000-0026BB765291
 * @property {number} OPEN - 0
 * @property {number} CLOSED - 1
 * @property {number} OPENING - 2
 * @property {number} CLOSING - 3
 * @property {number} STOPPED - 4
 */
var CurrentDoorState = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000000E-0000-1000-8000-0026BB765291",
    OPEN : 0,
    CLOSED : 1,
    OPENING : 2,
    CLOSING : 3,
    STOPPED : 4,
};

/**
 * @summary Characteristic "Current Heating Cooling State".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000000F-0000-1000-8000-0026BB765291
 * @property {number} OFF - 0
 * @property {number} HEAT - 1
 * @property {number} COOL - 2
 */
var CurrentHeatingCoolingState = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000000F-0000-1000-8000-0026BB765291",
    OFF : 0,
    HEAT : 1,
    COOL : 2,
};

/**
 * @summary Characteristic "Current Horizontal Tilt Angle".
 * 
 * 
 * 
 * @property {Formats} format - INT
 * @property {string} unit - arcdegrees
 * @property {number} maxValue - 90
 * @property {number} minValue - -90
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000006C-0000-1000-8000-0026BB765291
 */
var CurrentHorizontalTiltAngle = {
    format : Formats.INT,
    unit : "arcdegrees",
    maxValue : 90,
    minValue : -90,
    minStep : 1,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000006C-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Current Position".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {string} unit - percentage
 * @property {number} maxValue - 100
 * @property {number} minValue - 0
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000006D-0000-1000-8000-0026BB765291
 */
var CurrentPosition = {
    format : Formats.UINT8,
    unit : "percentage",
    maxValue : 100,
    minValue : 0,
    minStep : 1,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000006D-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Current Relative Humidity".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {string} unit - percentage
 * @property {number} maxValue - 100
 * @property {number} minValue - 0
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000010-0000-1000-8000-0026BB765291
 */
var CurrentRelativeHumidity = {
    format : Formats.FLOAT,
    unit : "percentage",
    maxValue : 100,
    minValue : 0,
    minStep : 1,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000010-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Current Temperature".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {string} unit - celsius
 * @property {number} maxValue - 100
 * @property {number} minValue - 0
 * @property {number} minStep - 0.1
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000011-0000-1000-8000-0026BB765291
 */
var CurrentTemperature = {
    format : Formats.FLOAT,
    unit : "celsius",
    maxValue : 100,
    minValue : 0,
    minStep : 0.1,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000011-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Current Time".
 * 
 * 
 * 
 * @property {Formats} format - STRING
 * @property {Perms} perms - [Perms.READ, Perms.WRITE]
 * @property {string} UUID - 0000009B-0000-1000-8000-0026BB765291
 */
var CurrentTime = {
    format : Formats.STRING,
    perms : [Perms.READ, Perms.WRITE],
    UUID : "0000009B-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Current Vertical Tilt Angle".
 * 
 * 
 * 
 * @property {Formats} format - INT
 * @property {string} unit - arcdegrees
 * @property {number} maxValue - 90
 * @property {number} minValue - -90
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000006E-0000-1000-8000-0026BB765291
 */
var CurrentVerticalTiltAngle = {
    format : Formats.INT,
    unit : "arcdegrees",
    maxValue : 90,
    minValue : -90,
    minStep : 1,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000006E-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Dayofthe Week".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {number} maxValue - 7
 * @property {number} minValue - 1
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.WRITE]
 * @property {string} UUID - 00000098-0000-1000-8000-0026BB765291
 */
var DayoftheWeek = {
    format : Formats.UINT8,
    maxValue : 7,
    minValue : 1,
    minStep : 1,
    perms : [Perms.READ, Perms.WRITE],
    UUID : "00000098-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Discover Bridged Accessories".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 0000009E-0000-1000-8000-0026BB765291
 * @property {number} START_DISCOVERY - 0
 * @property {number} STOP_DISCOVERY - 1
 */
var DiscoverBridgedAccessories = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "0000009E-0000-1000-8000-0026BB765291",
    START_DISCOVERY : 0,
    STOP_DISCOVERY : 1,
};

/**
 * @summary Characteristic "Discovered Bridged Accessories".
 * 
 * 
 * 
 * @property {Formats} format - UINT16
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000009F-0000-1000-8000-0026BB765291
 */
var DiscoveredBridgedAccessories = {
    format : Formats.UINT16,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000009F-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Firmware Revision".
 * 
 * 
 * 
 * @property {Formats} format - STRING
 * @property {Perms} perms - [Perms.READ]
 * @property {string} UUID - 00000052-0000-1000-8000-0026BB765291
 */
var FirmwareRevision = {
    format : Formats.STRING,
    perms : [Perms.READ],
    UUID : "00000052-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Hardware Revision".
 * 
 * 
 * 
 * @property {Formats} format - STRING
 * @property {Perms} perms - [Perms.READ]
 * @property {string} UUID - 00000053-0000-1000-8000-0026BB765291
 */
var HardwareRevision = {
    format : Formats.STRING,
    perms : [Perms.READ],
    UUID : "00000053-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Heating Threshold Temperature".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {string} unit - celsius
 * @property {number} maxValue - 25
 * @property {number} minValue - 0
 * @property {number} minStep - 0.1
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000012-0000-1000-8000-0026BB765291
 */
var HeatingThresholdTemperature = {
    format : Formats.FLOAT,
    unit : "celsius",
    maxValue : 25,
    minValue : 0,
    minStep : 0.1,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000012-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Hold Position".
 * 
 * 
 * 
 * @property {Formats} format - BOOL
 * @property {Perms} perms - [Perms.WRITE]
 * @property {string} UUID - 0000006F-0000-1000-8000-0026BB765291
 */
var HoldPosition = {
    format : Formats.BOOL,
    perms : [Perms.WRITE],
    UUID : "0000006F-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Hue".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {string} unit - arcdegrees
 * @property {number} maxValue - 360
 * @property {number} minValue - 0
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000013-0000-1000-8000-0026BB765291
 */
var Hue = {
    format : Formats.FLOAT,
    unit : "arcdegrees",
    maxValue : 360,
    minValue : 0,
    minStep : 1,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000013-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Identify".
 * 
 * 
 * 
 * @property {Formats} format - BOOL
 * @property {Perms} perms - [Perms.WRITE]
 * @property {string} UUID - 00000014-0000-1000-8000-0026BB765291
 */
var Identify = {
    format : Formats.BOOL,
    perms : [Perms.WRITE],
    UUID : "00000014-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Leak Detected".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000070-0000-1000-8000-0026BB765291
 * @property {number} LEAK_NOT_DETECTED - 0
 * @property {number} LEAK_DETECTED - 1
 */
var LeakDetected = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000070-0000-1000-8000-0026BB765291",
    LEAK_NOT_DETECTED : 0,
    LEAK_DETECTED : 1,
};

/**
 * @summary Characteristic "Link Quality".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {number} maxValue - 4
 * @property {number} minValue - 1
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000009C-0000-1000-8000-0026BB765291
 */
var LinkQuality = {
    format : Formats.UINT8,
    maxValue : 4,
    minValue : 1,
    minStep : 1,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000009C-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Lock Control Point".
 * 
 * 
 * 
 * @property {Formats} format - TLV8
 * @property {Perms} perms - [Perms.WRITE]
 * @property {string} UUID - 00000019-0000-1000-8000-0026BB765291
 */
var LockControlPoint = {
    format : Formats.TLV8,
    perms : [Perms.WRITE],
    UUID : "00000019-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Lock Current State".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000001D-0000-1000-8000-0026BB765291
 * @property {number} UNSECURED - 0
 * @property {number} SECURED - 1
 * @property {number} JAMMED - 2
 * @property {number} UNKNOWN - 3
 */
var LockCurrentState = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000001D-0000-1000-8000-0026BB765291",
    UNSECURED : 0,
    SECURED : 1,
    JAMMED : 2,
    UNKNOWN : 3,
};

/**
 * @summary Characteristic "Lock Last Known Action".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000001C-0000-1000-8000-0026BB765291
 * @property {number} SECURED_PHYSICALLY_INTERIOR - 0
 * @property {number} UNSECURED_PHYSICALLY_INTERIOR - 1
 * @property {number} SECURED_PHYSICALLY_EXTERIOR - 2
 * @property {number} UNSECURED_PHYSICALLY_EXTERIOR - 3
 * @property {number} SECURED_BY_KEYPAD - 4
 * @property {number} UNSECURED_BY_KEYPAD - 5
 * @property {number} SECURED_REMOTELY - 6
 * @property {number} UNSECURED_REMOTELY - 7
 * @property {number} SECURED_BY_AUTO_SECURE_TIMEOUT - 8
 */
var LockLastKnownAction = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000001C-0000-1000-8000-0026BB765291",
    SECURED_PHYSICALLY_INTERIOR : 0,
    UNSECURED_PHYSICALLY_INTERIOR : 1,
    SECURED_PHYSICALLY_EXTERIOR : 2,
    UNSECURED_PHYSICALLY_EXTERIOR : 3,
    SECURED_BY_KEYPAD : 4,
    UNSECURED_BY_KEYPAD : 5,
    SECURED_REMOTELY : 6,
    UNSECURED_REMOTELY : 7,
    SECURED_BY_AUTO_SECURE_TIMEOUT : 8,
};

/**
 * @summary Characteristic "Lock Management Auto Security Timeout".
 * 
 * 
 * 
 * @property {Formats} format - UINT32
 * @property {string} unit - seconds
 * @property {number} maxValue - 86400
 * @property {number} minValue - 0
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 0000001A-0000-1000-8000-0026BB765291
 */
var LockManagementAutoSecurityTimeout = {
    format : Formats.UINT32,
    unit : "seconds",
    maxValue : 86400,
    minValue : 0,
    minStep : 1,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "0000001A-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Lock Target State".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 0000001E-0000-1000-8000-0026BB765291
 * @property {number} UNSECURED - 0
 * @property {number} SECURED - 1
 */
var LockTargetState = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "0000001E-0000-1000-8000-0026BB765291",
    UNSECURED : 0,
    SECURED : 1,
};

/**
 * @summary Characteristic "Logs".
 * 
 * 
 * 
 * @property {Formats} format - TLV8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000001F-0000-1000-8000-0026BB765291
 */
var Logs = {
    format : Formats.TLV8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000001F-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Manufacturer".
 * 
 * 
 * 
 * @property {Formats} format - STRING
 * @property {Perms} perms - [Perms.READ]
 * @property {string} UUID - 00000020-0000-1000-8000-0026BB765291
 */
var Manufacturer = {
    format : Formats.STRING,
    perms : [Perms.READ],
    UUID : "00000020-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Model".
 * 
 * 
 * 
 * @property {Formats} format - STRING
 * @property {Perms} perms - [Perms.READ]
 * @property {string} UUID - 00000021-0000-1000-8000-0026BB765291
 */
var Model = {
    format : Formats.STRING,
    perms : [Perms.READ],
    UUID : "00000021-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Motion Detected".
 * 
 * 
 * 
 * @property {Formats} format - BOOL
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000022-0000-1000-8000-0026BB765291
 */
var MotionDetected = {
    format : Formats.BOOL,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000022-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Name".
 * 
 * 
 * 
 * @property {Formats} format - STRING
 * @property {Perms} perms - [Perms.READ]
 * @property {string} UUID - 00000023-0000-1000-8000-0026BB765291
 */
var Name = {
    format : Formats.STRING,
    perms : [Perms.READ],
    UUID : "00000023-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Obstruction Detected".
 * 
 * 
 * 
 * @property {Formats} format - BOOL
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000024-0000-1000-8000-0026BB765291
 */
var ObstructionDetected = {
    format : Formats.BOOL,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000024-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Occupancy Detected".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000071-0000-1000-8000-0026BB765291
 * @property {number} OCCUPANCY_NOT_DETECTED - 0
 * @property {number} OCCUPANCY_DETECTED - 1
 */
var OccupancyDetected = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000071-0000-1000-8000-0026BB765291",
    OCCUPANCY_NOT_DETECTED : 0,
    OCCUPANCY_DETECTED : 1,
};

/**
 * @summary Characteristic "On".
 * 
 * 
 * 
 * @property {Formats} format - BOOL
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000025-0000-1000-8000-0026BB765291
 */
var On = {
    format : Formats.BOOL,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000025-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Outlet In Use".
 * 
 * 
 * 
 * @property {Formats} format - BOOL
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000026-0000-1000-8000-0026BB765291
 */
var OutletInUse = {
    format : Formats.BOOL,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000026-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Pair Setup".
 * 
 * 
 * 
 * @property {Formats} format - TLV8
 * @property {Perms} perms - [Perms.READ, Perms.WRITE]
 * @property {string} UUID - 0000004C-0000-1000-8000-0026BB765291
 */
var PairSetup = {
    format : Formats.TLV8,
    perms : [Perms.READ, Perms.WRITE],
    UUID : "0000004C-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Pair Verify".
 * 
 * 
 * 
 * @property {Formats} format - TLV8
 * @property {Perms} perms - [Perms.READ, Perms.WRITE]
 * @property {string} UUID - 0000004E-0000-1000-8000-0026BB765291
 */
var PairVerify = {
    format : Formats.TLV8,
    perms : [Perms.READ, Perms.WRITE],
    UUID : "0000004E-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Pairing Features".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ]
 * @property {string} UUID - 0000004F-0000-1000-8000-0026BB765291
 */
var PairingFeatures = {
    format : Formats.UINT8,
    perms : [Perms.READ],
    UUID : "0000004F-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Pairing Pairings".
 * 
 * 
 * 
 * @property {Formats} format - TLV8
 * @property {Perms} perms - [Perms.READ, Perms.WRITE]
 * @property {string} UUID - 00000050-0000-1000-8000-0026BB765291
 */
var PairingPairings = {
    format : Formats.TLV8,
    perms : [Perms.READ, Perms.WRITE],
    UUID : "00000050-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Position State".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000072-0000-1000-8000-0026BB765291
 * @property {number} DECREASING - 0
 * @property {number} INCREASING - 1
 * @property {number} STOPPED - 2
 */
var PositionState = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000072-0000-1000-8000-0026BB765291",
    DECREASING : 0,
    INCREASING : 1,
    STOPPED : 2,
};

/**
 * @summary Characteristic "Programmable Switch Event".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {number} maxValue - 1
 * @property {number} minValue - 0
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000073-0000-1000-8000-0026BB765291
 */
var ProgrammableSwitchEvent = {
    format : Formats.UINT8,
    maxValue : 1,
    minValue : 0,
    minStep : 1,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000073-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Programmable Switch Output State".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {number} maxValue - 1
 * @property {number} minValue - 0
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000074-0000-1000-8000-0026BB765291
 */
var ProgrammableSwitchOutputState = {
    format : Formats.UINT8,
    maxValue : 1,
    minValue : 0,
    minStep : 1,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000074-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Reachable".
 * 
 * 
 * 
 * @property {Formats} format - BOOL
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000063-0000-1000-8000-0026BB765291
 */
var Reachable = {
    format : Formats.BOOL,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000063-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Rotation Direction".
 * 
 * 
 * 
 * @property {Formats} format - INT
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000028-0000-1000-8000-0026BB765291
 * @property {number} CLOCKWISE - 0
 * @property {number} COUNTER_CLOCKWISE - 1
 */
var RotationDirection = {
    format : Formats.INT,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000028-0000-1000-8000-0026BB765291",
    CLOCKWISE : 0,
    COUNTER_CLOCKWISE : 1,
};

/**
 * @summary Characteristic "Rotation Speed".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {string} unit - percentage
 * @property {number} maxValue - 100
 * @property {number} minValue - 0
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000029-0000-1000-8000-0026BB765291
 */
var RotationSpeed = {
    format : Formats.FLOAT,
    unit : "percentage",
    maxValue : 100,
    minValue : 0,
    minStep : 1,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000029-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Saturation".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {string} unit - percentage
 * @property {number} maxValue - 100
 * @property {number} minValue - 0
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 0000002F-0000-1000-8000-0026BB765291
 */
var Saturation = {
    format : Formats.FLOAT,
    unit : "percentage",
    maxValue : 100,
    minValue : 0,
    minStep : 1,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "0000002F-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Security System Alarm Type".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {number} maxValue - 1
 * @property {number} minValue - 0
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000008E-0000-1000-8000-0026BB765291
 */
var SecuritySystemAlarmType = {
    format : Formats.UINT8,
    maxValue : 1,
    minValue : 0,
    minStep : 1,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000008E-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Security System Current State".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000066-0000-1000-8000-0026BB765291
 * @property {number} STAY_ARM - 0
 * @property {number} AWAY_ARM - 1
 * @property {number} NIGHT_ARM - 2
 * @property {number} DISARMED - 3
 * @property {number} ALARM_TRIGGERED - 4
 */
var SecuritySystemCurrentState = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000066-0000-1000-8000-0026BB765291",
    STAY_ARM : 0,
    AWAY_ARM : 1,
    NIGHT_ARM : 2,
    DISARMED : 3,
    ALARM_TRIGGERED : 4,
};

/**
 * @summary Characteristic "Security System Target State".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000067-0000-1000-8000-0026BB765291
 * @property {number} STAY_ARM - 0
 * @property {number} AWAY_ARM - 1
 * @property {number} NIGHT_ARM - 2
 * @property {number} DISARM - 3
 */
var SecuritySystemTargetState = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000067-0000-1000-8000-0026BB765291",
    STAY_ARM : 0,
    AWAY_ARM : 1,
    NIGHT_ARM : 2,
    DISARM : 3,
};

/**
 * @summary Characteristic "Serial Number".
 * 
 * 
 * 
 * @property {Formats} format - STRING
 * @property {Perms} perms - [Perms.READ]
 * @property {string} UUID - 00000030-0000-1000-8000-0026BB765291
 */
var SerialNumber = {
    format : Formats.STRING,
    perms : [Perms.READ],
    UUID : "00000030-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Smoke Detected".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000076-0000-1000-8000-0026BB765291
 * @property {number} SMOKE_NOT_DETECTED - 0
 * @property {number} SMOKE_DETECTED - 1
 */
var SmokeDetected = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000076-0000-1000-8000-0026BB765291",
    SMOKE_NOT_DETECTED : 0,
    SMOKE_DETECTED : 1,
};

/**
 * @summary Characteristic "Software Revision".
 * 
 * 
 * 
 * @property {Formats} format - STRING
 * @property {Perms} perms - [Perms.READ]
 * @property {string} UUID - 00000054-0000-1000-8000-0026BB765291
 */
var SoftwareRevision = {
    format : Formats.STRING,
    perms : [Perms.READ],
    UUID : "00000054-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Status Active".
 * 
 * 
 * 
 * @property {Formats} format - BOOL
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000075-0000-1000-8000-0026BB765291
 */
var StatusActive = {
    format : Formats.BOOL,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000075-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Status Fault".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000077-0000-1000-8000-0026BB765291
 */
var StatusFault = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000077-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Status Jammed".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000078-0000-1000-8000-0026BB765291
 * @property {number} NOT_JAMMED - 0
 * @property {number} JAMMED - 1
 */
var StatusJammed = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000078-0000-1000-8000-0026BB765291",
    NOT_JAMMED : 0,
    JAMMED : 1,
};

/**
 * @summary Characteristic "Status Low Battery".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000079-0000-1000-8000-0026BB765291
 * @property {number} BATTERY_LEVEL_NORMAL - 0
 * @property {number} BATTERY_LEVEL_LOW - 1
 */
var StatusLowBattery = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000079-0000-1000-8000-0026BB765291",
    BATTERY_LEVEL_NORMAL : 0,
    BATTERY_LEVEL_LOW : 1,
};

/**
 * @summary Characteristic "Status Tampered".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000007A-0000-1000-8000-0026BB765291
 * @property {number} NOT_TAMPERED - 0
 * @property {number} TAMPERED - 1
 */
var StatusTampered = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000007A-0000-1000-8000-0026BB765291",
    NOT_TAMPERED : 0,
    TAMPERED : 1,
};

/**
 * @summary Characteristic "Target Door State".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000032-0000-1000-8000-0026BB765291
 * @property {number} OPEN - 0
 * @property {number} CLOSED - 1
 */
var TargetDoorState = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000032-0000-1000-8000-0026BB765291",
    OPEN : 0,
    CLOSED : 1,
};

/**
 * @summary Characteristic "Target Heating Cooling State".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000033-0000-1000-8000-0026BB765291
 * @property {number} OFF - 0
 * @property {number} HEAT - 1
 * @property {number} COOL - 2
 * @property {number} AUTO - 3
 */
var TargetHeatingCoolingState = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000033-0000-1000-8000-0026BB765291",
    OFF : 0,
    HEAT : 1,
    COOL : 2,
    AUTO : 3,
};

/**
 * @summary Characteristic "Target Horizontal Tilt Angle".
 * 
 * 
 * 
 * @property {Formats} format - INT
 * @property {string} unit - arcdegrees
 * @property {number} maxValue - 90
 * @property {number} minValue - -90
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 0000007B-0000-1000-8000-0026BB765291
 */
var TargetHorizontalTiltAngle = {
    format : Formats.INT,
    unit : "arcdegrees",
    maxValue : 90,
    minValue : -90,
    minStep : 1,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "0000007B-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Target Position".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {string} unit - percentage
 * @property {number} maxValue - 100
 * @property {number} minValue - 0
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 0000007C-0000-1000-8000-0026BB765291
 */
var TargetPosition = {
    format : Formats.UINT8,
    unit : "percentage",
    maxValue : 100,
    minValue : 0,
    minStep : 1,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "0000007C-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Target Relative Humidity".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {string} unit - percentage
 * @property {number} maxValue - 100
 * @property {number} minValue - 0
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000034-0000-1000-8000-0026BB765291
 */
var TargetRelativeHumidity = {
    format : Formats.FLOAT,
    unit : "percentage",
    maxValue : 100,
    minValue : 0,
    minStep : 1,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000034-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Target Temperature".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {string} unit - celsius
 * @property {number} maxValue - 38
 * @property {number} minValue - 10
 * @property {number} minStep - 0.1
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000035-0000-1000-8000-0026BB765291
 */
var TargetTemperature = {
    format : Formats.FLOAT,
    unit : "celsius",
    maxValue : 38,
    minValue : 10,
    minStep : 0.1,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000035-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Target Vertical Tilt Angle".
 * 
 * 
 * 
 * @property {Formats} format - INT
 * @property {string} unit - arcdegrees
 * @property {number} maxValue - 90
 * @property {number} minValue - -90
 * @property {number} minStep - 1
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 0000007D-0000-1000-8000-0026BB765291
 */
var TargetVerticalTiltAngle = {
    format : Formats.INT,
    unit : "arcdegrees",
    maxValue : 90,
    minValue : -90,
    minStep : 1,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "0000007D-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Temperature Display Units".
 * 
 * 
 * 
 * @property {Formats} format - UINT8
 * @property {Perms} perms - [Perms.READ, Perms.WRITE, Perms.NOTIFY]
 * @property {string} UUID - 00000036-0000-1000-8000-0026BB765291
 * @property {number} CELSIUS - 0
 * @property {number} FAHRENHEIT - 1
 */
var TemperatureDisplayUnits = {
    format : Formats.UINT8,
    perms : [Perms.READ, Perms.WRITE, Perms.NOTIFY],
    UUID : "00000036-0000-1000-8000-0026BB765291",
    CELSIUS : 0,
    FAHRENHEIT : 1,
};

/**
 * @summary Characteristic "Time Update".
 * 
 * 
 * 
 * @property {Formats} format - BOOL
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 0000009A-0000-1000-8000-0026BB765291
 */
var TimeUpdate = {
    format : Formats.BOOL,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "0000009A-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Tunnel Connection Timeout".
 * 
 * 
 * 
 * @property {Formats} format - UINT32
 * @property {Perms} perms - [Perms.WRITE, Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000061-0000-1000-8000-0026BB765291
 */
var TunnelConnectionTimeout = {
    format : Formats.UINT32,
    perms : [Perms.WRITE, Perms.READ, Perms.NOTIFY],
    UUID : "00000061-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Tunneled Accessory Advertising".
 * 
 * 
 * 
 * @property {Formats} format - BOOL
 * @property {Perms} perms - [Perms.WRITE, Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000060-0000-1000-8000-0026BB765291
 */
var TunneledAccessoryAdvertising = {
    format : Formats.BOOL,
    perms : [Perms.WRITE, Perms.READ, Perms.NOTIFY],
    UUID : "00000060-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Tunneled Accessory Connected".
 * 
 * 
 * 
 * @property {Formats} format - BOOL
 * @property {Perms} perms - [Perms.WRITE, Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000059-0000-1000-8000-0026BB765291
 */
var TunneledAccessoryConnected = {
    format : Formats.BOOL,
    perms : [Perms.WRITE, Perms.READ, Perms.NOTIFY],
    UUID : "00000059-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Tunneled Accessory State Number".
 * 
 * 
 * 
 * @property {Formats} format - FLOAT
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000058-0000-1000-8000-0026BB765291
 */
var TunneledAccessoryStateNumber = {
    format : Formats.FLOAT,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000058-0000-1000-8000-0026BB765291",
};

/**
 * @summary Characteristic "Version".
 * 
 * 
 * 
 * @property {Formats} format - STRING
 * @property {Perms} perms - [Perms.READ, Perms.NOTIFY]
 * @property {string} UUID - 00000037-0000-1000-8000-0026BB765291
 */
var Version = {
    format : Formats.STRING,
    perms : [Perms.READ, Perms.NOTIFY],
    UUID : "00000037-0000-1000-8000-0026BB765291",
};

/**
 * @summary The Characteristic definitions
 * A characteristic defines a property of a service. Each
 * service will have one or more Characteristics.
 * @property {Formats} Formats
 * @property {Units} Units
 * @property {Perms} Perms
 * @property {AccessoryIdentifier} AccessoryIdentifier - Characteristic "Accessory Identifier"
 * @property {AdministratorOnlyAccess} AdministratorOnlyAccess - Characteristic "Administrator Only Access"
 * @property {AirParticulateDensity} AirParticulateDensity - Characteristic "Air Particulate Density"
 * @property {AirParticulateSize} AirParticulateSize - Characteristic "Air Particulate Size"
 * @property {AirQuality} AirQuality - Characteristic "Air Quality"
 * @property {AudioFeedback} AudioFeedback - Characteristic "Audio Feedback"
 * @property {BatteryLevel} BatteryLevel - Characteristic "Battery Level"
 * @property {Brightness} Brightness - Characteristic "Brightness"
 * @property {CarbonDioxideDetected} CarbonDioxideDetected - Characteristic "Carbon Dioxide Detected"
 * @property {CarbonDioxideLevel} CarbonDioxideLevel - Characteristic "Carbon Dioxide Level"
 * @property {CarbonDioxidePeakLevel} CarbonDioxidePeakLevel - Characteristic "Carbon Dioxide Peak Level"
 * @property {CarbonMonoxideDetected} CarbonMonoxideDetected - Characteristic "Carbon Monoxide Detected"
 * @property {CarbonMonoxideLevel} CarbonMonoxideLevel - Characteristic "Carbon Monoxide Level"
 * @property {CarbonMonoxidePeakLevel} CarbonMonoxidePeakLevel - Characteristic "Carbon Monoxide Peak Level"
 * @property {Category} Category - Characteristic "Category"
 * @property {ChargingState} ChargingState - Characteristic "Charging State"
 * @property {ConfigureBridgedAccessory} ConfigureBridgedAccessory - Characteristic "Configure Bridged Accessory"
 * @property {ConfigureBridgedAccessoryStatus} ConfigureBridgedAccessoryStatus - Characteristic "Configure Bridged Accessory Status"
 * @property {ContactSensorState} ContactSensorState - Characteristic "Contact Sensor State"
 * @property {CoolingThresholdTemperature} CoolingThresholdTemperature - Characteristic "Cooling Threshold Temperature"
 * @property {CurrentAmbientLightLevel} CurrentAmbientLightLevel - Characteristic "Current Ambient Light Level"
 * @property {CurrentDoorState} CurrentDoorState - Characteristic "Current Door State"
 * @property {CurrentHeatingCoolingState} CurrentHeatingCoolingState - Characteristic "Current Heating Cooling State"
 * @property {CurrentHorizontalTiltAngle} CurrentHorizontalTiltAngle - Characteristic "Current Horizontal Tilt Angle"
 * @property {CurrentPosition} CurrentPosition - Characteristic "Current Position"
 * @property {CurrentRelativeHumidity} CurrentRelativeHumidity - Characteristic "Current Relative Humidity"
 * @property {CurrentTemperature} CurrentTemperature - Characteristic "Current Temperature"
 * @property {CurrentTime} CurrentTime - Characteristic "Current Time"
 * @property {CurrentVerticalTiltAngle} CurrentVerticalTiltAngle - Characteristic "Current Vertical Tilt Angle"
 * @property {DayoftheWeek} DayoftheWeek - Characteristic "Dayofthe Week"
 * @property {DiscoverBridgedAccessories} DiscoverBridgedAccessories - Characteristic "Discover Bridged Accessories"
 * @property {DiscoveredBridgedAccessories} DiscoveredBridgedAccessories - Characteristic "Discovered Bridged Accessories"
 * @property {FirmwareRevision} FirmwareRevision - Characteristic "Firmware Revision"
 * @property {HardwareRevision} HardwareRevision - Characteristic "Hardware Revision"
 * @property {HeatingThresholdTemperature} HeatingThresholdTemperature - Characteristic "Heating Threshold Temperature"
 * @property {HoldPosition} HoldPosition - Characteristic "Hold Position"
 * @property {Hue} Hue - Characteristic "Hue"
 * @property {Identify} Identify - Characteristic "Identify"
 * @property {LeakDetected} LeakDetected - Characteristic "Leak Detected"
 * @property {LinkQuality} LinkQuality - Characteristic "Link Quality"
 * @property {LockControlPoint} LockControlPoint - Characteristic "Lock Control Point"
 * @property {LockCurrentState} LockCurrentState - Characteristic "Lock Current State"
 * @property {LockLastKnownAction} LockLastKnownAction - Characteristic "Lock Last Known Action"
 * @property {LockManagementAutoSecurityTimeout} LockManagementAutoSecurityTimeout - Characteristic "Lock Management Auto Security Timeout"
 * @property {LockTargetState} LockTargetState - Characteristic "Lock Target State"
 * @property {Logs} Logs - Characteristic "Logs"
 * @property {Manufacturer} Manufacturer - Characteristic "Manufacturer"
 * @property {Model} Model - Characteristic "Model"
 * @property {MotionDetected} MotionDetected - Characteristic "Motion Detected"
 * @property {Name} Name - Characteristic "Name"
 * @property {ObstructionDetected} ObstructionDetected - Characteristic "Obstruction Detected"
 * @property {OccupancyDetected} OccupancyDetected - Characteristic "Occupancy Detected"
 * @property {On} On - Characteristic "On"
 * @property {OutletInUse} OutletInUse - Characteristic "Outlet In Use"
 * @property {PairSetup} PairSetup - Characteristic "Pair Setup"
 * @property {PairVerify} PairVerify - Characteristic "Pair Verify"
 * @property {PairingFeatures} PairingFeatures - Characteristic "Pairing Features"
 * @property {PairingPairings} PairingPairings - Characteristic "Pairing Pairings"
 * @property {PositionState} PositionState - Characteristic "Position State"
 * @property {ProgrammableSwitchEvent} ProgrammableSwitchEvent - Characteristic "Programmable Switch Event"
 * @property {ProgrammableSwitchOutputState} ProgrammableSwitchOutputState - Characteristic "Programmable Switch Output State"
 * @property {Reachable} Reachable - Characteristic "Reachable"
 * @property {RotationDirection} RotationDirection - Characteristic "Rotation Direction"
 * @property {RotationSpeed} RotationSpeed - Characteristic "Rotation Speed"
 * @property {Saturation} Saturation - Characteristic "Saturation"
 * @property {SecuritySystemAlarmType} SecuritySystemAlarmType - Characteristic "Security System Alarm Type"
 * @property {SecuritySystemCurrentState} SecuritySystemCurrentState - Characteristic "Security System Current State"
 * @property {SecuritySystemTargetState} SecuritySystemTargetState - Characteristic "Security System Target State"
 * @property {SerialNumber} SerialNumber - Characteristic "Serial Number"
 * @property {SmokeDetected} SmokeDetected - Characteristic "Smoke Detected"
 * @property {SoftwareRevision} SoftwareRevision - Characteristic "Software Revision"
 * @property {StatusActive} StatusActive - Characteristic "Status Active"
 * @property {StatusFault} StatusFault - Characteristic "Status Fault"
 * @property {StatusJammed} StatusJammed - Characteristic "Status Jammed"
 * @property {StatusLowBattery} StatusLowBattery - Characteristic "Status Low Battery"
 * @property {StatusTampered} StatusTampered - Characteristic "Status Tampered"
 * @property {TargetDoorState} TargetDoorState - Characteristic "Target Door State"
 * @property {TargetHeatingCoolingState} TargetHeatingCoolingState - Characteristic "Target Heating Cooling State"
 * @property {TargetHorizontalTiltAngle} TargetHorizontalTiltAngle - Characteristic "Target Horizontal Tilt Angle"
 * @property {TargetPosition} TargetPosition - Characteristic "Target Position"
 * @property {TargetRelativeHumidity} TargetRelativeHumidity - Characteristic "Target Relative Humidity"
 * @property {TargetTemperature} TargetTemperature - Characteristic "Target Temperature"
 * @property {TargetVerticalTiltAngle} TargetVerticalTiltAngle - Characteristic "Target Vertical Tilt Angle"
 * @property {TemperatureDisplayUnits} TemperatureDisplayUnits - Characteristic "Temperature Display Units"
 * @property {TimeUpdate} TimeUpdate - Characteristic "Time Update"
 * @property {TunnelConnectionTimeout} TunnelConnectionTimeout - Characteristic "Tunnel Connection Timeout"
 * @property {TunneledAccessoryAdvertising} TunneledAccessoryAdvertising - Characteristic "Tunneled Accessory Advertising"
 * @property {TunneledAccessoryConnected} TunneledAccessoryConnected - Characteristic "Tunneled Accessory Connected"
 * @property {TunneledAccessoryStateNumber} TunneledAccessoryStateNumber - Characteristic "Tunneled Accessory State Number"
 * @property {Version} Version - Characteristic "Version"
 */
var Characteristic = {
    Formats : Formats,
    Units : Units,
    Perms : Perms,
    AccessoryIdentifier : AccessoryIdentifier,
    AdministratorOnlyAccess : AdministratorOnlyAccess,
    AirParticulateDensity : AirParticulateDensity,
    AirParticulateSize : AirParticulateSize,
    AirQuality : AirQuality,
    AudioFeedback : AudioFeedback,
    BatteryLevel : BatteryLevel,
    Brightness : Brightness,
    CarbonDioxideDetected : CarbonDioxideDetected,
    CarbonDioxideLevel : CarbonDioxideLevel,
    CarbonDioxidePeakLevel : CarbonDioxidePeakLevel,
    CarbonMonoxideDetected : CarbonMonoxideDetected,
    CarbonMonoxideLevel : CarbonMonoxideLevel,
    CarbonMonoxidePeakLevel : CarbonMonoxidePeakLevel,
    Category : Category,
    ChargingState : ChargingState,
    ConfigureBridgedAccessory : ConfigureBridgedAccessory,
    ConfigureBridgedAccessoryStatus : ConfigureBridgedAccessoryStatus,
    ContactSensorState : ContactSensorState,
    CoolingThresholdTemperature : CoolingThresholdTemperature,
    CurrentAmbientLightLevel : CurrentAmbientLightLevel,
    CurrentDoorState : CurrentDoorState,
    CurrentHeatingCoolingState : CurrentHeatingCoolingState,
    CurrentHorizontalTiltAngle : CurrentHorizontalTiltAngle,
    CurrentPosition : CurrentPosition,
    CurrentRelativeHumidity : CurrentRelativeHumidity,
    CurrentTemperature : CurrentTemperature,
    CurrentTime : CurrentTime,
    CurrentVerticalTiltAngle : CurrentVerticalTiltAngle,
    DayoftheWeek : DayoftheWeek,
    DiscoverBridgedAccessories : DiscoverBridgedAccessories,
    DiscoveredBridgedAccessories : DiscoveredBridgedAccessories,
    FirmwareRevision : FirmwareRevision,
    HardwareRevision : HardwareRevision,
    HeatingThresholdTemperature : HeatingThresholdTemperature,
    HoldPosition : HoldPosition,
    Hue : Hue,
    Identify : Identify,
    LeakDetected : LeakDetected,
    LinkQuality : LinkQuality,
    LockControlPoint : LockControlPoint,
    LockCurrentState : LockCurrentState,
    LockLastKnownAction : LockLastKnownAction,
    LockManagementAutoSecurityTimeout : LockManagementAutoSecurityTimeout,
    LockTargetState : LockTargetState,
    Logs : Logs,
    Manufacturer : Manufacturer,
    Model : Model,
    MotionDetected : MotionDetected,
    Name : Name,
    ObstructionDetected : ObstructionDetected,
    OccupancyDetected : OccupancyDetected,
    On : On,
    OutletInUse : OutletInUse,
    PairSetup : PairSetup,
    PairVerify : PairVerify,
    PairingFeatures : PairingFeatures,
    PairingPairings : PairingPairings,
    PositionState : PositionState,
    ProgrammableSwitchEvent : ProgrammableSwitchEvent,
    ProgrammableSwitchOutputState : ProgrammableSwitchOutputState,
    Reachable : Reachable,
    RotationDirection : RotationDirection,
    RotationSpeed : RotationSpeed,
    Saturation : Saturation,
    SecuritySystemAlarmType : SecuritySystemAlarmType,
    SecuritySystemCurrentState : SecuritySystemCurrentState,
    SecuritySystemTargetState : SecuritySystemTargetState,
    SerialNumber : SerialNumber,
    SmokeDetected : SmokeDetected,
    SoftwareRevision : SoftwareRevision,
    StatusActive : StatusActive,
    StatusFault : StatusFault,
    StatusJammed : StatusJammed,
    StatusLowBattery : StatusLowBattery,
    StatusTampered : StatusTampered,
    TargetDoorState : TargetDoorState,
    TargetHeatingCoolingState : TargetHeatingCoolingState,
    TargetHorizontalTiltAngle : TargetHorizontalTiltAngle,
    TargetPosition : TargetPosition,
    TargetRelativeHumidity : TargetRelativeHumidity,
    TargetTemperature : TargetTemperature,
    TargetVerticalTiltAngle : TargetVerticalTiltAngle,
    TemperatureDisplayUnits : TemperatureDisplayUnits,
    TimeUpdate : TimeUpdate,
    TunnelConnectionTimeout : TunnelConnectionTimeout,
    TunneledAccessoryAdvertising : TunneledAccessoryAdvertising,
    TunneledAccessoryConnected : TunneledAccessoryConnected,
    TunneledAccessoryStateNumber : TunneledAccessoryStateNumber,
    Version : Version,
};

/**
 * @summary Service "Accessory Information".
 * @property {Array} Characteristics - Required characteristics: {@link Identify}, {@link Manufacturer}, {@link Model}, {@link Name}, {@link SerialNumber}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link FirmwareRevision}, {@link HardwareRevision}, {@link SoftwareRevision}.
 * @property {string} UUID - 0000003E-0000-1000-8000-0026BB765291
 */
var AccessoryInformation = {
    Characteristics: [
        "Identify",
        "Manufacturer",
        "Model",
        "Name",
        "SerialNumber",
    ],
    OptionalCharacteristics: [
        "FirmwareRevision",
        "HardwareRevision",
        "SoftwareRevision",
    ],
    UUID: "0000003E-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Air Quality Sensor".
 * @property {Array} Characteristics - Required characteristics: {@link AirQuality}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link AirParticulateDensity}, {@link AirParticulateSize}, {@link StatusActive}, {@link StatusFault}, {@link StatusTampered}, {@link StatusLowBattery}, {@link Name}.
 * @property {string} UUID - 0000008D-0000-1000-8000-0026BB765291
 */
var AirQualitySensor = {
    Characteristics: [
        "AirQuality",
    ],
    OptionalCharacteristics: [
        "AirParticulateDensity",
        "AirParticulateSize",
        "StatusActive",
        "StatusFault",
        "StatusTampered",
        "StatusLowBattery",
        "Name",
    ],
    UUID: "0000008D-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Battery Service".
 * @property {Array} Characteristics - Required characteristics: {@link BatteryLevel}, {@link ChargingState}, {@link StatusLowBattery}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link Name}.
 * @property {string} UUID - 000000A1-0000-1000-8000-0026BB765291
 */
var BatteryService = {
    Characteristics: [
        "BatteryLevel",
        "ChargingState",
        "StatusLowBattery",
    ],
    OptionalCharacteristics: [
        "Name",
    ],
    UUID: "000000A1-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Bridging State".
 * @property {Array} Characteristics - Required characteristics: {@link Reachable}, {@link LinkQuality}, {@link AccessoryIdentifier}, {@link Category}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link Name}.
 * @property {string} UUID - 00000062-0000-1000-8000-0026BB765291
 */
var BridgingState = {
    Characteristics: [
        "Reachable",
        "LinkQuality",
        "AccessoryIdentifier",
        "Category",
    ],
    OptionalCharacteristics: [
        "Name",
    ],
    UUID: "00000062-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Carbon Dioxide Sensor".
 * @property {Array} Characteristics - Required characteristics: {@link CarbonDioxideDetected}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link StatusActive}, {@link StatusFault}, {@link StatusLowBattery}, {@link StatusTampered}, {@link CarbonDioxideLevel}, {@link CarbonDioxidePeakLevel}, {@link Name}.
 * @property {string} UUID - 00000097-0000-1000-8000-0026BB765291
 */
var CarbonDioxideSensor = {
    Characteristics: [
        "CarbonDioxideDetected",
    ],
    OptionalCharacteristics: [
        "StatusActive",
        "StatusFault",
        "StatusLowBattery",
        "StatusTampered",
        "CarbonDioxideLevel",
        "CarbonDioxidePeakLevel",
        "Name",
    ],
    UUID: "00000097-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Carbon Monoxide Sensor".
 * @property {Array} Characteristics - Required characteristics: {@link CarbonMonoxideDetected}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link StatusActive}, {@link StatusFault}, {@link StatusLowBattery}, {@link StatusTampered}, {@link CarbonMonoxideLevel}, {@link CarbonMonoxidePeakLevel}, {@link Name}.
 * @property {string} UUID - 0000007F-0000-1000-8000-0026BB765291
 */
var CarbonMonoxideSensor = {
    Characteristics: [
        "CarbonMonoxideDetected",
    ],
    OptionalCharacteristics: [
        "StatusActive",
        "StatusFault",
        "StatusLowBattery",
        "StatusTampered",
        "CarbonMonoxideLevel",
        "CarbonMonoxidePeakLevel",
        "Name",
    ],
    UUID: "0000007F-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Contact Sensor".
 * @property {Array} Characteristics - Required characteristics: {@link ContactSensorState}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link StatusActive}, {@link StatusFault}, {@link StatusTampered}, {@link StatusLowBattery}, {@link Name}.
 * @property {string} UUID - 00000080-0000-1000-8000-0026BB765291
 */
var ContactSensor = {
    Characteristics: [
        "ContactSensorState",
    ],
    OptionalCharacteristics: [
        "StatusActive",
        "StatusFault",
        "StatusTampered",
        "StatusLowBattery",
        "Name",
    ],
    UUID: "00000080-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Door".
 * @property {Array} Characteristics - Required characteristics: {@link CurrentPosition}, {@link PositionState}, {@link TargetPosition}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link HoldPosition}, {@link ObstructionDetected}, {@link Name}.
 * @property {string} UUID - 00000081-0000-1000-8000-0026BB765291
 */
var Door = {
    Characteristics: [
        "CurrentPosition",
        "PositionState",
        "TargetPosition",
    ],
    OptionalCharacteristics: [
        "HoldPosition",
        "ObstructionDetected",
        "Name",
    ],
    UUID: "00000081-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Fan".
 * @property {Array} Characteristics - Required characteristics: {@link On}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link RotationDirection}, {@link RotationSpeed}, {@link Name}.
 * @property {string} UUID - 00000040-0000-1000-8000-0026BB765291
 */
var Fan = {
    Characteristics: [
        "On",
    ],
    OptionalCharacteristics: [
        "RotationDirection",
        "RotationSpeed",
        "Name",
    ],
    UUID: "00000040-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Garage Door Opener".
 * @property {Array} Characteristics - Required characteristics: {@link CurrentDoorState}, {@link TargetDoorState}, {@link ObstructionDetected}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link LockCurrentState}, {@link LockTargetState}, {@link Name}.
 * @property {string} UUID - 00000041-0000-1000-8000-0026BB765291
 */
var GarageDoorOpener = {
    Characteristics: [
        "CurrentDoorState",
        "TargetDoorState",
        "ObstructionDetected",
    ],
    OptionalCharacteristics: [
        "LockCurrentState",
        "LockTargetState",
        "Name",
    ],
    UUID: "00000041-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Humidity Sensor".
 * @property {Array} Characteristics - Required characteristics: {@link CurrentRelativeHumidity}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link StatusActive}, {@link StatusFault}, {@link StatusTampered}, {@link StatusLowBattery}, {@link Name}.
 * @property {string} UUID - 00000082-0000-1000-8000-0026BB765291
 */
var HumiditySensor = {
    Characteristics: [
        "CurrentRelativeHumidity",
    ],
    OptionalCharacteristics: [
        "StatusActive",
        "StatusFault",
        "StatusTampered",
        "StatusLowBattery",
        "Name",
    ],
    UUID: "00000082-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Leak Sensor".
 * @property {Array} Characteristics - Required characteristics: {@link LeakDetected}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link StatusActive}, {@link StatusFault}, {@link StatusTampered}, {@link StatusLowBattery}, {@link Name}.
 * @property {string} UUID - 00000083-0000-1000-8000-0026BB765291
 */
var LeakSensor = {
    Characteristics: [
        "LeakDetected",
    ],
    OptionalCharacteristics: [
        "StatusActive",
        "StatusFault",
        "StatusTampered",
        "StatusLowBattery",
        "Name",
    ],
    UUID: "00000083-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Light Sensor".
 * @property {Array} Characteristics - Required characteristics: {@link CurrentAmbientLightLevel}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link StatusActive}, {@link StatusFault}, {@link StatusTampered}, {@link StatusLowBattery}, {@link Name}.
 * @property {string} UUID - 00000084-0000-1000-8000-0026BB765291
 */
var LightSensor = {
    Characteristics: [
        "CurrentAmbientLightLevel",
    ],
    OptionalCharacteristics: [
        "StatusActive",
        "StatusFault",
        "StatusTampered",
        "StatusLowBattery",
        "Name",
    ],
    UUID: "00000084-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Lightbulb".
 * @property {Array} Characteristics - Required characteristics: {@link On}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link Brightness}, {@link Hue}, {@link Saturation}, {@link Name}.
 * @property {string} UUID - 00000043-0000-1000-8000-0026BB765291
 */
var Lightbulb = {
    Characteristics: [
        "On",
    ],
    OptionalCharacteristics: [
        "Brightness",
        "Hue",
        "Saturation",
        "Name",
    ],
    UUID: "00000043-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Lock Management".
 * @property {Array} Characteristics - Required characteristics: {@link LockControlPoint}, {@link Version}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link Logs}, {@link AudioFeedback}, {@link LockManagementAutoSecurityTimeout}, {@link AdministratorOnlyAccess}, {@link LockLastKnownAction}, {@link CurrentDoorState}, {@link MotionDetected}, {@link Name}.
 * @property {string} UUID - 00000044-0000-1000-8000-0026BB765291
 */
var LockManagement = {
    Characteristics: [
        "LockControlPoint",
        "Version",
    ],
    OptionalCharacteristics: [
        "Logs",
        "AudioFeedback",
        "LockManagementAutoSecurityTimeout",
        "AdministratorOnlyAccess",
        "LockLastKnownAction",
        "CurrentDoorState",
        "MotionDetected",
        "Name",
    ],
    UUID: "00000044-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Lock Mechanism".
 * @property {Array} Characteristics - Required characteristics: {@link LockCurrentState}, {@link LockTargetState}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link Name}.
 * @property {string} UUID - 00000045-0000-1000-8000-0026BB765291
 */
var LockMechanism = {
    Characteristics: [
        "LockCurrentState",
        "LockTargetState",
    ],
    OptionalCharacteristics: [
        "Name",
    ],
    UUID: "00000045-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Motion Sensor".
 * @property {Array} Characteristics - Required characteristics: {@link MotionDetected}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link StatusActive}, {@link StatusFault}, {@link StatusTampered}, {@link StatusLowBattery}, {@link Name}.
 * @property {string} UUID - 00000085-0000-1000-8000-0026BB765291
 */
var MotionSensor = {
    Characteristics: [
        "MotionDetected",
    ],
    OptionalCharacteristics: [
        "StatusActive",
        "StatusFault",
        "StatusTampered",
        "StatusLowBattery",
        "Name",
    ],
    UUID: "00000085-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Occupancy Sensor".
 * @property {Array} Characteristics - Required characteristics: {@link OccupancyDetected}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link StatusActive}, {@link StatusFault}, {@link StatusTampered}, {@link StatusLowBattery}, {@link Name}.
 * @property {string} UUID - 00000086-0000-1000-8000-0026BB765291
 */
var OccupancySensor = {
    Characteristics: [
        "OccupancyDetected",
    ],
    OptionalCharacteristics: [
        "StatusActive",
        "StatusFault",
        "StatusTampered",
        "StatusLowBattery",
        "Name",
    ],
    UUID: "00000086-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Outlet".
 * @property {Array} Characteristics - Required characteristics: {@link On}, {@link OutletInUse}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link Name}.
 * @property {string} UUID - 00000047-0000-1000-8000-0026BB765291
 */
var Outlet = {
    Characteristics: [
        "On",
        "OutletInUse",
    ],
    OptionalCharacteristics: [
        "Name",
    ],
    UUID: "00000047-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Security System".
 * @property {Array} Characteristics - Required characteristics: {@link SecuritySystemCurrentState}, {@link SecuritySystemTargetState}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link StatusFault}, {@link StatusTampered}, {@link SecuritySystemAlarmType}, {@link Name}.
 * @property {string} UUID - 0000007E-0000-1000-8000-0026BB765291
 */
var SecuritySystem = {
    Characteristics: [
        "SecuritySystemCurrentState",
        "SecuritySystemTargetState",
    ],
    OptionalCharacteristics: [
        "StatusFault",
        "StatusTampered",
        "SecuritySystemAlarmType",
        "Name",
    ],
    UUID: "0000007E-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Smoke Sensor".
 * @property {Array} Characteristics - Required characteristics: {@link SmokeDetected}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link StatusActive}, {@link StatusFault}, {@link StatusTampered}, {@link StatusLowBattery}, {@link Name}.
 * @property {string} UUID - 00000087-0000-1000-8000-0026BB765291
 */
var SmokeSensor = {
    Characteristics: [
        "SmokeDetected",
    ],
    OptionalCharacteristics: [
        "StatusActive",
        "StatusFault",
        "StatusTampered",
        "StatusLowBattery",
        "Name",
    ],
    UUID: "00000087-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Stateful Programmable Switch".
 * @property {Array} Characteristics - Required characteristics: {@link ProgrammableSwitchEvent}, {@link ProgrammableSwitchOutputState}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link Name}.
 * @property {string} UUID - 00000088-0000-1000-8000-0026BB765291
 */
var StatefulProgrammableSwitch = {
    Characteristics: [
        "ProgrammableSwitchEvent",
        "ProgrammableSwitchOutputState",
    ],
    OptionalCharacteristics: [
        "Name",
    ],
    UUID: "00000088-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Stateless Programmable Switch".
 * @property {Array} Characteristics - Required characteristics: {@link ProgrammableSwitchEvent}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link Name}.
 * @property {string} UUID - 00000089-0000-1000-8000-0026BB765291
 */
var StatelessProgrammableSwitch = {
    Characteristics: [
        "ProgrammableSwitchEvent",
    ],
    OptionalCharacteristics: [
        "Name",
    ],
    UUID: "00000089-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Switch".
 * @property {Array} Characteristics - Required characteristics: {@link On}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link Name}.
 * @property {string} UUID - 00000049-0000-1000-8000-0026BB765291
 */
var Switch = {
    Characteristics: [
        "On",
    ],
    OptionalCharacteristics: [
        "Name",
    ],
    UUID: "00000049-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Temperature Sensor".
 * @property {Array} Characteristics - Required characteristics: {@link CurrentTemperature}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link StatusActive}, {@link StatusFault}, {@link StatusLowBattery}, {@link StatusTampered}, {@link Name}.
 * @property {string} UUID - 0000008A-0000-1000-8000-0026BB765291
 */
var TemperatureSensor = {
    Characteristics: [
        "CurrentTemperature",
    ],
    OptionalCharacteristics: [
        "StatusActive",
        "StatusFault",
        "StatusLowBattery",
        "StatusTampered",
        "Name",
    ],
    UUID: "0000008A-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Thermostat".
 * @property {Array} Characteristics - Required characteristics: {@link CurrentHeatingCoolingState}, {@link TargetHeatingCoolingState}, {@link CurrentTemperature}, {@link TargetTemperature}, {@link TemperatureDisplayUnits}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link CurrentRelativeHumidity}, {@link TargetRelativeHumidity}, {@link CoolingThresholdTemperature}, {@link HeatingThresholdTemperature}, {@link Name}.
 * @property {string} UUID - 0000004A-0000-1000-8000-0026BB765291
 */
var Thermostat = {
    Characteristics: [
        "CurrentHeatingCoolingState",
        "TargetHeatingCoolingState",
        "CurrentTemperature",
        "TargetTemperature",
        "TemperatureDisplayUnits",
    ],
    OptionalCharacteristics: [
        "CurrentRelativeHumidity",
        "TargetRelativeHumidity",
        "CoolingThresholdTemperature",
        "HeatingThresholdTemperature",
        "Name",
    ],
    UUID: "0000004A-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Time Information".
 * @property {Array} Characteristics - Required characteristics: {@link CurrentTime}, {@link DayoftheWeek}, {@link TimeUpdate}.
 * @property {string} UUID - 00000099-0000-1000-8000-0026BB765291
 */
var TimeInformation = {
    Characteristics: [
        "CurrentTime",
        "DayoftheWeek",
        "TimeUpdate",
    ],
    OptionalCharacteristics: [],
    UUID: "00000099-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Tunneled BT LE Accessory Service".
 * @property {Array} Characteristics - Required characteristics: {@link Name}, {@link AccessoryIdentifier}, {@link TunneledAccessoryStateNumber}, {@link TunneledAccessoryConnected}, {@link TunneledAccessoryAdvertising}, {@link TunnelConnectionTimeout}.
 * @property {string} UUID - 0000008B-0000-1000-8000-0026BB765291
 */
var TunneledBTLEAccessoryService = {
    Characteristics: [
        "Name",
        "AccessoryIdentifier",
        "TunneledAccessoryStateNumber",
        "TunneledAccessoryConnected",
        "TunneledAccessoryAdvertising",
        "TunnelConnectionTimeout",
    ],
    OptionalCharacteristics: [],
    UUID: "0000008B-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Window"
 * @property {Array} Characteristics - Required characteristics: {@link CurrentPosition}, {@link TargetPosition}, {@link PositionState}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link HoldPosition}, {@link ObstructionDetected}, {@link Name}.
 * @property {string} UUID - 0000008C-0000-1000-8000-0026BB765291
 */
var Window = {
  Characteristics: [
    "CurrentPosition",
    "TargetPosition",
    "PositionState",
  ],
  OptionalCharacteristics: [
    "HoldPosition",
    "ObstructionDetected",
    "Name",
  ],
  UUID = "0000008B-0000-1000-8000-0026BB765291",
};

/**
 * @summary Service "Window Covering".
 * @property {Array} Characteristics - Required characteristics: {@link CurrentPosition}, {@link TargetPosition}, {@link PositionState}.
 * @property {Array} OptionalCharacteristics - Optional characteristics: {@link HoldPosition}, {@link TargetHorizontalTiltAngle}, {@link TargetVerticalTiltAngle}, {@link CurrentHorizontalTiltAngle}, {@link CurrentVerticalTiltAngle}, {@link ObstructionDetected}, {@link Name}.
 * @property {string} UUID - 0000008C-0000-1000-8000-0026BB765291
 */
var WindowCovering = {
    Characteristics: [
        "CurrentPosition",
        "TargetPosition",
        "PositionState",
    ],
    OptionalCharacteristics: [
        "HoldPosition",
        "TargetHorizontalTiltAngle",
        "TargetVerticalTiltAngle",
        "CurrentHorizontalTiltAngle",
        "CurrentVerticalTiltAngle",
        "ObstructionDetected",
        "Name",
    ],
    UUID: "0000008C-0000-1000-8000-0026BB765291",
};

/**
 * @summary The Service definitions
 * A service defines a single function of a widget but can
 * implement multiple characteristics.
 * @property {AccessoryInformation} AccessoryInformation - Service "Accessory Information".
 * @property {AirQualitySensor} AirQualitySensor - Service "Air Quality Sensor".
 * @property {BatteryService} BatteryService - Service "Battery Service".
 * @property {BridgingState} BridgingState - Service "Bridging State".
 * @property {CarbonDioxideSensor} CarbonDioxideSensor - Service "Carbon Dioxide Sensor".
 * @property {CarbonMonoxideSensor} CarbonMonoxideSensor - Service "Carbon Monoxide Sensor".
 * @property {ContactSensor} ContactSensor - Service "Contact Sensor".
 * @property {Door} Door - Service "Door".
 * @property {Fan} Fan - Service "Fan".
 * @property {GarageDoorOpener} GarageDoorOpener - Service "Garage Door Opener".
 * @property {HumiditySensor} HumiditySensor - Service "Humidity Sensor".
 * @property {LeakSensor} LeakSensor - Service "Leak Sensor".
 * @property {LightSensor} LightSensor - Service "Light Sensor".
 * @property {Lightbulb} Lightbulb - Service "Lightbulb".
 * @property {LockManagement} LockManagement - Service "Lock Management".
 * @property {LockMechanism} LockMechanism - Service "Lock Mechanism".
 * @property {MotionSensor} MotionSensor - Service "Motion Sensor".
 * @property {OccupancySensor} OccupancySensor - Service "Occupancy Sensor".
 * @property {Outlet} Outlet - Service "Outlet".
 * @property {SecuritySystem} SecuritySystem - Service "Security System".
 * @property {SmokeSensor} SmokeSensor - Service "Smoke Sensor".
 * @property {StatefulProgrammableSwitch} StatefulProgrammableSwitch - Service "Stateful Programmable Switch".
 * @property {StatelessProgrammableSwitch} StatelessProgrammableSwitch - Service "Stateless Programmable Switch".
 * @property {Switch} Switch - Service "Switch".
 * @property {TemperatureSensor} TemperatureSensor - Service "Temperature Sensor".
 * @property {Thermostat} Thermostat - Service "Thermostat".
 * @property {TimeInformation} TimeInformation - Service "Time Information".
 * @property {TunneledBTLEAccessoryService} TunneledBTLEAccessoryService - Service "Tunneled BT LE Accessory Service".
 * @property {Window} Window - Service "Window".
 * @property {WindowCovering} WindowCovering - Service "Window Covering".
 */
var Service = {
    AccessoryInformation : AccessoryInformation,
    AirQualitySensor : AirQualitySensor,
    BatteryService : BatteryService,
    BridgingState : BridgingState,
    CarbonDioxideSensor : CarbonDioxideSensor,
    CarbonMonoxideSensor : CarbonMonoxideSensor,
    ContactSensor : ContactSensor,
    Door : Door,
    Fan : Fan,
    GarageDoorOpener : GarageDoorOpener,
    HumiditySensor : HumiditySensor,
    LeakSensor : LeakSensor,
    LightSensor : LightSensor,
    Lightbulb : Lightbulb,
    LockManagement : LockManagement,
    LockMechanism : LockMechanism,
    MotionSensor : MotionSensor,
    OccupancySensor : OccupancySensor,
    Outlet : Outlet,
    SecuritySystem : SecuritySystem,
    SmokeSensor : SmokeSensor,
    StatefulProgrammableSwitch : StatefulProgrammableSwitch,
    StatelessProgrammableSwitch : StatelessProgrammableSwitch,
    Switch : Switch,
    TemperatureSensor : TemperatureSensor,
    Thermostat : Thermostat,
    TimeInformation : TimeInformation,
    TunneledBTLEAccessoryService : TunneledBTLEAccessoryService,
    Window : Window,
    WindowCovering : WindowCovering,
};

module.exports = {
    Characteristic: Characteristic,
    Service: Service,
};

