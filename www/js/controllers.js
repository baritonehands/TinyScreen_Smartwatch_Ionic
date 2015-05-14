/* global bluetoothSerial */
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('DevicesCtrl', function($scope) {
  $scope.devices = [];
  $scope.scan = function() {
    bluetoothSerial.list(function(devices) {
      $scope.devices = devices;
      $scope.$digest();
    });
  }
})

.controller('DeviceCtrl', function($scope, $stateParams) {
  bluetoothSerial.connect($stateParams.id, function(device) {
    $scope.device = device;
    var now = moment();
    var msg = 'D' + now.format('YYYY MM DD HH mm ss');
    bluetoothSerial.write(msg);
    $scope.$digest();
  })
})

.controller('SettingsCtrl', function($scope, settingsService) {
  $scope.settings = settingsService.settings;
  $scope.get = settingsService.get;
})

.controller('SettingsDetailCtrl', function($scope, $stateParams, settingsService) {
  $scope.setting = settingsService.get($stateParams.setting);

  $scope.selectValue = function (val) {
    $scope.setting = settingsService.set($stateParams.setting, val);
  };
});
