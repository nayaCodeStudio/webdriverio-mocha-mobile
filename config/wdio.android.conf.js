const path = require('path');
const { config } = require('./wdio.shared.conf');
config.specs = [
  path.join(process.cwd(), './test/specs/android/google-maps*.js')
];

config.capabilities = [
  {
    "appium:noReset": true,
    "appium:fullReset": false,
    "appium:autoGrantPermissions": true,
    "appium:autoAcceptAlerts": true,
    "appium:maxInstances": 1,
    "appium:platformName": "Android",
    "appium:platformVersion": "10",
    "appium:deviceName": "Pixel 4 API 28",
    "appium:automationName": "UIAutomator2",
    "appium:appPackage": "com.google.android.apps.maps",
    "appium:appActivity": "com.google.android.maps.MapsActivity",
    "appium:autoGrantPermissions": true
  }
];

// config.capabilities = [
//   {
//     "appium:noReset": true,
//     "appium:fullReset": false,
//     "appium:autoGrantPermissions": true,
//     "appium:autoAcceptAlerts": true,
//     "appium:maxInstances": 1,
//     "appium:platformName": "Android",
//     "appium:platformVersion": "12",
//     "appium:deviceName": "Pixel 4 API 28",
//     "appium:automationName": "UIAutomator2",
//     "appium:app": path.join(process.cwd(), "./app/android/file-name.apk"),
//     "appium:autoGrantPermissions": true
//   }
// ];

config.services = [
  'appium'
];

config.port = 4723;
exports.config = config;