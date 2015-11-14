'use strict';

angular.module('meucasorioApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/novo', {
        templateUrl: 'app/main/new/new.html',
        controller: 'NewCtrl'
      });
  });