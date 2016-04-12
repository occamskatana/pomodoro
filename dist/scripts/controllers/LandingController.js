(function(){
	function LandingController($scope, $interval){

		$scope.active = false
		$scope.breakActive = false;

		$scope.timerTime = 1500;

		

		var breakTimerPromise;

		$scope.updateBreakTimer = function(){
			breakActive = true;

			if($scope.breakActive === false){
				$interval.cancel(promise);
				$scope.timerTime = 300;
				breakTimerPromise = $interval(function(){
					$scope.timerTime = $scope.timerTime - 1;
					if($scope.timerTime === 0){
						$interval.cancel(breakTimerPromise);
						$scope.timerTime = 1500;
						$scope.breakActive = false
						alert("Get Back to work, bitches");
						$scope.updateTimer();
					};
				}, 1000)
				$scope.breakActive = true;
			} else {
				$interval.cancel(breakTimerPromise);
				$scope.timerTime = 300;
				$scope.breakActive = false;
			};

			
		}

		var promise;

		$scope.updateTimer = function(){
			onBreak = false;
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