angular.module('wendlerCalculator')
	.directive('mesocycle', function() {
		return {
			templateUrl: 'templates/mesocycle.html',
			controller: 'MesocycleController'
		}
	});