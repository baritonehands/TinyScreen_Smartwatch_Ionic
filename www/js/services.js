angular.module('starter.services', [])

.factory('settingsService', function () {

  var initialTypes = {
    brightness: {
      id: 0, name: 'Brightness', selected: 1, values: _.range(1, 6)
    }
  };

  function getFromStorage() {
    var settings = localStorage['settings'];
    return settings ? JSON.parse(settings) : initialTypes;
  }

  var api = {

    settings: [
      'brightness'
    ],

    get: function(setting) {
      return getFromStorage()[setting];
    },

    set: function(setting, value) {
      var all = getFromStorage();
      all[setting].selected = value;
      localStorage['settings'] = JSON.stringify(all);
      return api.get(setting);
    }
  };

  return api;
})

.factory('bluetoothSerialService', function () {
  var api = {

  };

  return api;
});
