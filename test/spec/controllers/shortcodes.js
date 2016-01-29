'use strict';

describe('Controller: ShortcodesCtrl', function () {

  // load the controller's module
  beforeEach(module('corlate2App'));

  var ShortcodesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShortcodesCtrl = $controller('ShortcodesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShortcodesCtrl.awesomeThings.length).toBe(3);
  });
});
