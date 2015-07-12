angular.module('starter.controllers', [])

.controller('CalidadAireCtrl', function($scope) {
    var contaminantsChart = new ContaminantsChart({'url':'http://zgzvizdata.herokuapp.com/data'});
})
.controller('EstacionesCtrl', function($scope) {
var stationsMap = new StationsMap({'url':'http://zgzvizdata.herokuapp.com/stations_coordinates'});
})

.controller('AcercadeCtrl', function($scope) {});
