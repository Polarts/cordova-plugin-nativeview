var cordova = require('cordova');

var PLUGIN_NAME = 'NativeViewAndroid';

function NativeViewAndroid() {
    
    // this.getBuildVariant = function (config, success, error) {
    //     return new Promise(function (resolve, reject) {
    //         cordova.exec(success || resolve, error || reject, PLUGIN_NAME, 'getBuildVariant', [config]);
    //     });
    // };
}

module.exports = new NativeViewAndroid();
