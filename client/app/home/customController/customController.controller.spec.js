'use strict';

describe('Controller: CustomControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('meucasorioApp'));

  var CustomControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomControllerCtrl = $controller('CustomControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
