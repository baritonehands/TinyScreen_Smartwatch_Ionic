/* global bluetoothSerial */
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('DevicesCtrl', function($scope) {
  $scope.devices = [{name: 'Testing'}];
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
    var now = new Date();
    bluetoothSerial.write('D2015 05 11 21 40 00');
    $scope.$digest();
  })
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = [
    { name: 'Setting 1', value: 'Value' }
  ];
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});
