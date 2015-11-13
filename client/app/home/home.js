'use strict';

angular.module('meucasorioApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home/novo', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      })

  });
