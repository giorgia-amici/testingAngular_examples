partyApp.controller('CreateNewParty',
	function CreateNewParty($scope, $http){

			console.log('run1')

			$scope.submit = function(){
				$scope.party= {name: $scope.name, organizer: $scope.organizer, location: $scope.location, date: $scope.date}
				$http.post('/parties', $scope.party)
				.success(function(response){
					console.log(response)
				});
			};

			$scope.showMe = function(){
				if($scope.party !== undefined){return $scope.party}
			};
	}
);





			    // new Party({
			    // 	name: $scope.party.name,
			    // 	organizer: $scope.party.organizer,
			    // 	location: $scope.party.location,
			    // 	date: $scope.party.date
			    // })