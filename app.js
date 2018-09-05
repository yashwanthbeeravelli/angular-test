var app = angular.module('quickSeries', ['angularUtils.directives.dirPagination']);
app.controller('WeatherLogsList', function ($scope, $http, $filter) {
	$scope.Math = window.Math;
	$scope.temperatures = [];
	$http.get("./Quick_Series/weather_temp_logs.json").success(function (result) {
		$scope.temperatures = result;
	});
	$scope.sort = function (key) {
		$scope.sortKey = key;
	}

	$scope.addTemp = function () {
		if (angular.isDefined($scope.date) && angular.isDefined($scope.temp)) {
			$scope.temperatures.push({ 'date': $scope.date, 'temp': $scope.temp });
			$http.post("./Quick_Series/weather_temp_logs.json", { 'date': $scope.date, 'temp': $scope.temp })
				.success(function (result) {
					$scope.temperatures = result.temperatures;
				});			
			$scope.date = '';
			$scope.temp = '';
		}
		else {
			$scope.errorMessage = "Please fill all the fields";
		}
	}
	$scope.remTemp = function (temp) {
		if (angular.isDefined(temp.date) && angular.isDefined(temp.temp)) {
			$scope.temperatures.pop({ 'date': temp.date, 'temp': temp.temp });
		}
		else {
			$scope.errorMessage = "Invalid Selection";
		}
	}
	$scope.calculateAverage = function(){ 
		var sum = 0; 
		var data = $scope.temperatures;		
		for(var i = 0; i < data.length; i++){			
			sum += parseInt(data[i].temp, 10); 
		}	
		var avg = sum/data.length;	
		return avg; 
	};	
	$scope.Highest = Math.max.apply(Math,$scope.temperatures.map(function(temp){return temp.temp;}));
	$scope.Lowest = Math.min.apply(Math,$scope.temperatures.map(function(temp){return temp.temp;}));	
});
