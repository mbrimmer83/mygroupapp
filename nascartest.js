var app = angular.module('my-app', []);

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
    var nascarScheduleResults = nascarScheduleData;
    $scope.results = nascarScheduleResults;
  });
});
