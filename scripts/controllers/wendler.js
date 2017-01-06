'use strict';

angular.module('wendlerCalculator')
	.controller("MesocycleController", function($scope, dataService) {

	dataService.getMaxes(function(response) { 
		$scope.maxes = response.data;
	});
	
	dataService.getMesocycle(function(response) {  
		$scope.waves = response.data;
	});
	
	$scope.calcSets = function(reps, weightMax, percentage) {
		return dataService.calcSets(reps, weightMax, percentage);
	};
	
	$scope.resetMaxes = function(max) {
		dataService.resetMaxes(max);
	};

	})