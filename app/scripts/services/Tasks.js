(function(){
	function Tasks($firebaseArray, $firebaseObject){
		var firebaseref = new Firebase('https://boiling-torch-5645.firebaseio.com/')
		var tasks = $firebaseArray(firebaseref);

		return {
			all: tasks,

			syncObject: $firebaseObject(firebaseref)
		}
	}

	angular
		.module('pomodoro')
		.factory('Tasks', ['$firebaseArray', '$firebaseObject', Tasks]);

})();