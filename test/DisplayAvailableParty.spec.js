describe('DescribeAvailableParty', function(){
	beforeEach(module('partyApp'));

	var scope, ctrl;

	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		ctrl = $controller('DescribeAvailableParty', {
			$scope: scope
		});
	}));
});