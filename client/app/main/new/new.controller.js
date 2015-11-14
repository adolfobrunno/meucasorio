'use strict';

angular.module('meucasorioApp')
  .controller('NewCtrl', function ($scope) {

     $scope.today = function() {
        $scope.dt = new Date();
      };

  })
 .directive('lowercase', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function(input) {
                    return input ? input.toLowerCase() : "";
                });
                element.css("text-transform","lowercase");
            }
        };
    });