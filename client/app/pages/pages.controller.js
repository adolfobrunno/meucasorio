'use strict';

angular.module('meucasorioApp')
  .controller('PagesCtrl', function ($scope, $routeParams, $http) {

    $http.get('/api/marriages/domain/'+$routeParams.domain).success(function(returned) {
      $scope.marriage = returned;
    });

  });


