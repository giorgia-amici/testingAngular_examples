partyApp.controller('CreateNewParty',
	function CreateNewParty($scope, $http){

			$scope.submit = function(){
				$scope.party= {name: $scope.name, organizer: $scope.organizer, location: $scope.location, date: $scope.date}
			};
			$scope.showMe = function(){
				if($scope.party !== undefined){return $scope.party}
			};
			$http.get('http://localhost:3000/NewParty').
			  success(function(data, status, headers, config) {
			    console.log('saved')
			  }).
			  error(function(data, status, headers, config) {
						console.log('Nothing has been saved, an error has occurred')
			  });
		}
);





			    // new Party({
			    // 	name: $scope.party.name,
			    // 	organizer: $scope.party.organizer,
			    // 	location: $scope.party.location,
			    // 	date: $scope.party.date
			    // })