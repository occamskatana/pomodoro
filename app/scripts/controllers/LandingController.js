(function(){
	function LandingController($scope, $interval){

		$scope.active = false

		$scope.timerTime = 1500;

		var promise;

		$scope.updateTimer = function(){
			if ($scope.active === false){
				promise = $interval(function(){
					$scope.timerTime = $scope.timerTime - 1;
				}, 1000)
				$scope.active = true;
			} else {
				$interval.cancel(promise);
				$scope.timerTime = 1500;
				$scope.active = false;
			}
		};
		
	}

	angular
		.module('pomodoro')
		.controller('LandingController', ['$scope', '$interval', LandingController]);
})();