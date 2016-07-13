'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'ui.bootstrap',
    'ngTasty',
    'phonecatAnimations',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
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
