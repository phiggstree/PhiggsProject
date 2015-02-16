/**
 * Created by duyen on 2/12/15.
 */

angular.module('app.services', [] )
	.factory('html5LocalStorage', function () {
		var STORAGE_ID = 'localStorageWith_nG_KEY';   //the Local storage Key
		return {
			//Get the localstorage value
			get: function ()
			{
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},
			//Set the localstorage Value
			put: function (values)
			{
				localStorage.setItem(STORAGE_ID, JSON.stringify(values));
			}
		};
	});