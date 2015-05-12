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
    bluetoothSerial.write("D2015 05 11 23 40 00");
    $scope.$digest();
  })
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
