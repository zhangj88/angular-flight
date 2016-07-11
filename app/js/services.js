'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('FlightService', ["$q", "$http",
  function($q, $http){
    var deferred = $q.defer();
    var promise = deferred.promise;

    $http({
      method: 'GET',
      url: "http://127.0.0.1:3000/flight/research"
    }).success(function(response) {
      var result = {};

      result.header = [
        {
          "key": "allTime",
          "name": "allTime",
          "style": {},
          "class": []
        },
        {
          "key": "airlineName",
          "name": "airlineName",
          "style": {},
          "class": []
        },
        {
          "key": "classTypeStr",
          "name": "classTypeStr",
          "style": {},
          "class": []
        }
      ];
      result.sortBy = "allTime";
      result.sortOrder = "dsc";
      result.rows = response;

      deferred.resolve(result);
    });

    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
