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
				templateUrl: 'templates/home.html',
				controller: 'LandingController'
			})
	}

	angular
		.module('pomodoro',['ui.router'])
		.config(config)
})();