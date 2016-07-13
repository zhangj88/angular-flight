'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('FlightService',
    function($q, $http){
      var param = {}

      function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
      }

      function getFlightRequests() {
        var deferred = $q.defer();
        console.info("http://127.0.0.1:3000/flight/research?ddate=" + formatDate(param.ddate) + "&adate=" + formatDate(param.adate) +
            "&dcity=" + param.dcity + "&acity=" + param.acity + "&flightway=" + param.flightway + "&seatclass=" + param.seatclass +
            "&adult=" + param.adult + "&child=" + param.child);

        $http({
          method: 'GET',
          url: "http://127.0.0.1:3000/flight/research?ddate=" + formatDate(param.ddate) + "&adate=" + formatDate(param.adate) +
              "&dcity=" + param.dcity + "&acity=" + param.acity + "&flightway=" + param.flightway + "&seatclass=" + param.seatclass +
              "&adult=" + param.adult + "&child=" + param.child
        }).success(function (response) {
          deferred.resolve(response);
        }).error(function (error) {
          deferred.reject(error);
        });

        return deferred.promise;
      }

      function setData(data) {
        param = data;
      }

      return {
        getFlightRequests: getFlightRequests,
        setData : setData
      }

    });
