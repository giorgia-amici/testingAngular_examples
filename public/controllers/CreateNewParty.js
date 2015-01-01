


partyApp.controller('CreateNewParty',
	function CreateNewParty($scope){
			$scope.party = {
				name: 'GiorgiaUUU',
				organizer: 'Giorgia',
				location: 'London',
				date: '1/1/2013'
			} 
	}
);



// partyApp.controller('CreateNewParty',
// 	function CreateNewParty($scope, PartyData){
// 			$scope.party = {};
// 			$scope.saveEvent = function(event, form) {
// 				if(form.$valid) {
// 					PartyData.save($scope.party)
// 					.$promise.then(
// 						function(response) { console.log('success', response)},
//             function(response) { console.log('failure', response)}
// 						);
// 				}
// 			}
// 	}
// );
