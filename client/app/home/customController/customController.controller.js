'use strict';

angular.module('meucasorioApp')
  .controller('CustomControllerCtrl', function ($scope, $http, $routeParams) {

    $http.get('/api/marriages/domain/'+$routeParams.domain).success(function(returned) {
      $scope.marriage = returned;
    });

  });
