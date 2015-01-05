// var Story = require('../models/Party');

partyApp.controller('CreateNewParty',
	function CreateNewParty($scope){
			$scope.submit = function(){
				$scope.party= {name: $scope.name, organizer: $scope.organizer, location: $scope.location, date: $scope.date}
			};
			$scope.showMe = function(){
				if($scope.party !== undefined){return $scope.party}
			};
		}
);

            // storyDocument = new Story({
            //     source: story.source,
            //     title: story.title,
            //     description: story.description,
            //     link: story.link,
            //     pubDate: story.pubDate
            // });
            // storyDocument.save(function(err) {
            //     if (err) {
            //     console.log(err);
            //     } else{
            //         // console.log('new document saved')
            //     } 
            // });






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
