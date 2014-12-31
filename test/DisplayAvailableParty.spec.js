describe('DescribeAvailableParty', function(){
	beforeEach(module('partyApp'));

	var scope, ctrl;

	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		ctrl = $controller('DescribeAvailableParty', {
			$scope: scope
		});
	}));

	it('should display the name, location, date and organizer of a default event', function(){
		expect(scope.party).not.toBeUndefined();
	});
});