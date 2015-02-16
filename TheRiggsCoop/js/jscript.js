/**
 * Created by duyen on 2/9/15.
 */

	/** This function calculates ticket cost (Qty* Cost) base on user
	 * input.
	 * @param $scope
	 * @constructor
	 */

	 function BasketCtrl ($scope) {
		$scope.description = "Organic Eggs";
		$scope.cost = 8;
		$scope.qty = 1;
	 }


	/** This Function calls, collects all the data in the chickenData file for display and stores
	 * it in the $scope to be displayed in table **/
	function ChickenInfoCtrl($scope, $http){
		$http.get ('chickenData.json')
			.success(function(data){$scope.chickens = data.chickens;})
			.error (function(data){console.log ('error in getting data')});
	}
	/**This Function is called to grab data for google pie chart */

	function ChickenDataCtrl($scope, $http) {
		$http.get('chickenChart.json')
			.success(function (data) {
				$scope.eggs = data.eggs;
			})
			.error(function (data) {
				console.log('error in getting data')
			})
}
function loadappURL(url){
	window.open(url);
	window.moveTo(0, 0);
}

