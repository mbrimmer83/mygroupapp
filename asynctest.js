var app = angular.module('sports-app', []);

var cityData = ['Atlanta', 'Miami', 'San Francisco', 'Dallas', 'Seattle'];

app.controller('TicketController', function($http, ticketCall) {
  cityData.forEach(function(city){
    ticketCall.getTicketInfo(city, function(ticketData){
    });
  });
});


app.factory('ticketCall', function($http) {
  return {
    getTicketInfo: function(city, callback) {
      var date = new Date();
      var time = date.getTime();
      console.log(time);
      $http({
        method: 'GET',
        url:'https://app.ticketmaster.com/discovery/v2/events.json?',
        params: {
          apikey: 'E8VNq1LttN0VP5ql6bYc28kSUXfNpFjG',
          classificationName: "NFL",
          city: city
        }
      }).success(function(ticketData) {
          var date = new Date();
          var time = date.getTime();
          console.log(time);
          console.log(city);
          console.log(ticketData);
          callback(ticketData);
      });
    }
  };
});
