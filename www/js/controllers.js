angular.module('starter.controllers', [])

.controller('CalidadAireCtrl', function($scope) {
    var contaminantsChart = new ContaminantsChart({'url':'http://zgzvizdata.herokuapp.com/data'});
})
.controller('EstacionesCtrl', function($scope) {
    alert("foo");
var stationsMap = new StationsMap({'url':'http://zgzvizdata.herokuapp.com/stations_coordinates'});
    alert("bar");
})

.controller('AcercadeCtrl', function($scope) {});
