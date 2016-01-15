'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'ui.bootstrap',
  //  'ngTasty',
    'phonecatAnimations',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/flight', {
            templateUrl: 'partials/flight.html',
            controller: 'PhoneListCtrl'
        }).
        when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'PhoneListCtrl'
        }).
        when('/result', {
            templateUrl: 'partials/result.html',
            controller: 'PhoneListCtrl'
        }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/flight'
      });
  }]);
