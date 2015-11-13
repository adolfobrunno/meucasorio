'use strict';

describe('Controller: ListaDePresentesCtrl', function () {

  // load the controller's module
  beforeEach(module('meucasorioApp'));

  var ListaDePresentesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListaDePresentesCtrl = $controller('ListaDePresentesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
