partyApp.controller('CreateNewParty',
	function CreateNewParty($scope){
			$scope.submit = function(){
				$scope.party= {name: $scope.name, organizer: $scope.organizer, location: $scope.location, date: $scope.date}
				console.log($scope.party)
				// return $scope.newParty
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
