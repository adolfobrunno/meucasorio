'use strict';

angular.module('meucasorioApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Início',
      'link': '/'
    },
    {
      'title': 'Lista de Presentes',
      'link': '/listaDePresentes'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    // $scope.isActive = function(route) {
    //   return route === $location.path();
    // };
  });