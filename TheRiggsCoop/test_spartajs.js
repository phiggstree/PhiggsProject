/**
 * Created by duyen on 2/12/15.
 */

app = angular.module("sparta", []);

window.CompetitionController = function($scope) {

	$scope.activities = [{
		id: 6431,
		name: "Meeting",
		points: 20
	}, {
		id: 6432,
		name: "Deal",
		points: 100
	}];

	$scope.addNewActivity = function() {

		//This function should create 2 new input fields
		//The user should input the name and points
		//We can ignore the id for now
		//Then the object should be craeted and pushed in as you see below with the mock data.

		var updatedActivities = {
			id: 6433,
			name: "Call",
			points: 5
		};

		$scope.activities.push(updatedActivities);
	}

	$scope.editActivity = function(activity) {
		var selectedActivity = activity;
		console.log(selectedActivity);
	}

	$scope.removeActivity = function(activity) {
		activityId = activity.id; //the activity id

		var i = 0;
		for (var item in $scope.activities) {
			if ($scope.activities[item].id == activityId)
				break;
			i++;
		}

		$scope.activities.splice(i, 1);
	}

}