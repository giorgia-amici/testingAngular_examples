describe('Controllers', function() {
  beforeEach(module('partyApp'));

  var ctrl, scope;

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('DisplayAvailableParty', {$scope: scope});
    // expect($scope.party).toBeDefined();
  }));

  describe('DisplayAvailableParty', function(){
  	it('has a controller', function(){
  		expect(ctrl).toBeDefined();
  	})
  })
	// it('has a name', function(){
	// 	expect($scope).not.toBeUndefined();
	// });

});
