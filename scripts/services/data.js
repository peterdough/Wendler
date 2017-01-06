'use strict';

angular.module('wendlerCalculator')
	.service('dataService', function($http) {
		this.getMaxes = function(callback) {
			$http.get('mock/wendler-maxes.json').then(callback)
		};

		this.getMesocycle = function(callback) {
			$http.get('mock/mesocycle.json').then(callback)
		};


		this.calcSets = function(reps, weightMax, percentage) {
			var weight = Math.ceil((weightMax * percentage)/5) * 5;
			return reps + " \u00D7 " + weight;
		};

		this.resetMaxes = function(max) {
			max.overheadPress = "";
			max.deadlift = "";
			max.benchPress = "";
			max.squat = "";
		};
	})