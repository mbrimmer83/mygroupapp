var app = angular.module('bing-app', []);

app.factory('bingCall', function($http) {
  return {
    getBingSearch: function(callback) {
      $http({
        method: 'GET',
        url: 'https://bingapis.azure-api.net/api/v5/search/?',
        headers: {
          'Ocp-Apim-Subscription-Key': 'edf5195497104ae6ba7b61a48c246a57'
        },
        params: {
          count: 20,
          mkt: 'en-US',
          q: 'nascar',
          safesearch: 'Moderate'
        }
      }).success(function(bingSearchData) {
          console.log(bingSearchData);
          callback(bingSearchData);
        });
    }
  };
});

app.controller('BingController', function($http, $scope, bingCall) {
  bingCall.getBingSearch(function(bingSearchData) {
    var bingSearchResults = bingSearchData;
    $scope.newsResults = bingSearchResults;
  });
});
