'use strict';

/* App Module */

var flightApp = angular.module('flightApp', [
    'ngRoute',
    'ui.bootstrap',
    'ngTasty',
    'flightAnimations',
    'flightControllers',
    'flightFilters',
    'flightServices'
]);

flightApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/flight', {
            templateUrl: 'partials/flight.html'
        }).
        when('/about', {
            templateUrl: 'partials/about.html'
        }).
        when('/result', {
            templateUrl: 'partials/result.html'
        }).
      otherwise({
        redirectTo: '/flight'
      });
  }]);
