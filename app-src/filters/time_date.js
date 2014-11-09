'use strict';

angular.module('inhaus')
// converts timestamp to local time 13:12 pm
.filter('newLocalTime', function() {
	return function(timestamp) {
		var time = new moment(timestamp).format('HH:mm a');
		return  time;
	};
});