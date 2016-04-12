(function(){
	function config($stateProvider, $locationProvider){
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			})

		$stateProvider
			.state('landing', {
				url: '/',
				templateUrl: 'templates/home.html'
			})
	}

	angular
		.module('pomodoro', ['ui.router'])
		.config(config)
})();