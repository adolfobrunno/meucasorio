'use strict';

angular.module('meucasorioApp')
  .controller('NewCtrl', function ($scope, $http, $location, Auth, Modal, ngDialog) {

     var user = Auth.getCurrentUser();
     $scope.marriage = {bride:{}, groom:{}};
     $scope.user = "";

      $scope.register = Modal.confirm.register(function(){
          $http.post('/api/marriages', $scope.marriage).success(function(result, err){
                if(!err){
                    console.log(result);
                    $location.path('/pages/'+result.domain);
                }
          })
      })

      $scope.setUser = function(choise){
            $scope.user = choise;
            switch (choise){
                case "bride":
                    $scope.marriage.bride.name = user.name;
                    $scope.marriage.bride.email = user.email;
                    $scope.marriage.bride.user = user._id;
                    break;
                case "groom":
                    $scope.marriage.groom.name = user.name;
                    $scope.marriage.groom.email = user.email;
                    $scope.marriage.groom.user = user._id;
                    break;
            }
      }

  })
 .directive('lowercase', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function(input) {
                   return input ? input.replace(/\s+/g,'').toLowerCase() : "";
                });
            }
        };
    });