'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('FlightService',
    function($q, $http){

      function getPullRequests() {
        var deferred = $q.defer();
        var promise = deferred.promise;
        var progress;

        $http({
          method: 'GET',
          url: "http://127.0.0.1:3000/flight/research"
        }).success(function (response) {
          deferred.resolve(response);
        }).error(function (error) {
          deferred.reject(error);
        });

        return promise;
      }

      return {
        getPullRequests: getPullRequests
      }

    });
