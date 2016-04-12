(function(){
	function Tasks($firebaseArray, $firebaseObject){
		var firebaseref = new Firebase('https://boiling-torch-5645.firebaseio.com/tasks')
		var tasks = $firebaseArray(firebaseref);
		var _add = function(task){
			tasks.$add(task)
		}
		return {
			all: tasks,
			add: _add
		}
	}

	angular
		.module('pomodoro')
		.factory('Tasks', ['$firebaseArray', '$firebaseObject', Tasks]);

})();