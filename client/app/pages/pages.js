'use strict';

angular.module('meucasorioApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pages/:domain', {
        templateUrl: 'app/pages/pages.html',
        controller: 'PagesCtrl'
      });
  });
