var partyApp = angular.module('partyApp', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when('/NewParty',
		{
			template.Url:'templates/NewParty.html',
			controller: 'CreateNewParty'
		})
	});