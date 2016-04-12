(function(){
	function LandingController($scope, $interval){

		$scope.active = false
		$scope.breakActive = false;
		$scope.timerTime = 1500;
		$scope.completedSessions = 0

		

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

			if ($scope.completedSessions % 4 === 0 && $scope.completedSessions !== 0) {
				$scope.timerTime = (60 * 30);
			} else {
				$scope.timerTime = 1500;
			};

			if ($scope.active === false){
				promise = $interval(function(){
					$scope.timerTime = $scope.timerTime - 1;
					if($scope.timerTime === 0){
						$interval.cancel(promise);
						$scope.completedSessions += 1;
						if ($scope.completedSessions % 4 === 0 && $scope.completedSessions !== 0) {
							$scope.timerTime = (60 * 30);
						}

						if ($scope.completedSessions % 5 === 0 ) {
							$scope.updateBreakTimer();
						}

						$scope.active = false;
					}
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