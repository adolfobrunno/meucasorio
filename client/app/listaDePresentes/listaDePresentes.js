'use strict';

angular.module('meucasorioApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/listaDePresentes', {
        templateUrl: 'app/listaDePresentes/listaDePresentes.html',
        controller: 'ListaDePresentesCtrl'
      });
  });
