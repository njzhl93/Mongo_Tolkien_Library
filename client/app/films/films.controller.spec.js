'use strict';

describe('Controller: FilmsCtrl', function () {

  // load the controller's module
  beforeEach(module('tolkienlibApp'));

  var FilmsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilmsCtrl = $controller('FilmsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
