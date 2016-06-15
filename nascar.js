var app = angular.module('nascar-app', []);

// Nascar Sprint Cup Series AJAX service and controller
app.factory('nascarCall', function($http) {
  return {
    getNascarSchedule: function(callback) {
      $http({
        method: 'GET',
        url: '/nascar-sc-schedule.JSON'

      }).success(function(nascarScheduleData) {
          console.log( nascarScheduleData);
          callback(nascarScheduleData);
        });
    }
  };
});

app.controller('NascarController', function($http, $scope, nascarCall) {
  nascarCall.getNascarSchedule(function(nascarScheduleData) {
    var nascarScheduleResults = nascarScheduleData.events;
    $scope.results = nascarScheduleResults;
  });
});
