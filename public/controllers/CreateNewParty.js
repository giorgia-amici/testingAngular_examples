partyApp.controller('CreateNewParty',
	function CreateNewParty($scope){
			$scope.party = {
				name: 'GiorgiaUUU',
				organizer: 'Giorgia',
				location: 'London',
				date: '1/1/2013'

			} 
			console.log($scope)
			console.log($scope.name)
	}
);
