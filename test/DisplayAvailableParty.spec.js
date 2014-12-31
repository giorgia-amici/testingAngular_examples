describe('DisplayAvailableParty', function() {
  beforeEach(module('partyApp'));

  var ctrl, scope;

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('DisplayAvailableParty', {
    	$scope: scope
    });
  }));
})

// Because controllers are not available on the global scope, we need to use angular.mock.inject
//  to inject our controller first. The first step is to use the module function,