partyApp.controller('CreateNewParty',
	function CreateNewParty($scope, $http){
			$scope.submit = function(){
				$scope.party= {name: $scope.name, organizer: $scope.organizer, location: $scope.location, date: $scope.date}
				console.log($scope.party)
				$http.post('/parties', $scope.party )
				.success(function(response){
					console.log('i am here')
					console.log(response)
					// redirect
				});
			};

			$scope.showMe = function(){
				if($scope.party !== undefined){return $scope.party}
			};
	}
);



