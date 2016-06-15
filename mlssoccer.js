var app = angular.module('soccer-app', []);
// USA Soccer AJAX service and controller
app.factory('usSoccerCall', function($http) {
  return {
    getUsSoccerSchedule: function(callback) {
      $http({
        method: 'GET',
        url: '/ussoccerschedule.JSON'

      }).success(function(usSoccerScheduleData) {
          console.log(usSoccerScheduleData);
          callback(usSoccerScheduleData);
        });
    }
  };
});

app.controller('UsSoccerController', function($http, $scope, usSoccerCall) {
  usSoccerCall.getUsSoccerSchedule(function(usSoccerScheduleData) {
    var usSoccerScheduleResults = usSoccerScheduleData;
    $scope.results = usSoccerScheduleResults;
  });
});
