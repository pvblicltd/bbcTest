/* DOCUMENT INFORMATION
	- Document: Pvblic Ltd
	- Version:  0.0.1
	- Client:   BBC
	- Author:   James A B Gray   
*/

'use strict';

angular.module('PvblicBBCTest', [
	'envConfig',
	'ui.bootstrap',
	'ngRoute',
	'UserApp',
	'util-centered',
	'ngResource'
]).
config(['$routeProvider', function($routeProvider) {

	// Public Routes
	//==============================================================
	$routeProvider.when('/login', {
		templateUrl: 'templates/public/login.html', 
		login: true
	});
	$routeProvider.when('/verify-email', {
		templateUrl: 'templates/public/verify-email.html', 
		verify_email: true
	});
	$routeProvider.when('/reset-password', {
		templateUrl: 'templates/public/reset-password.html', 
		public: true
	});
	$routeProvider.when('/set-password', {
		templateUrl: 'templates/public/set-password.html', 
		set_password: true
	});

	// Common Routes
	//==============================================================
	

	$routeProvider.when('/dash', {
		templateUrl: 'templates/common/dash.html',  
		controller: 'dash'
	});
	
	$routeProvider.when('/my-account', {
		templateUrl: 'templates/common/my_account.html', 
		controller: 'my_account'
	});

	// return to dash
	//==============================================================
	$routeProvider.otherwise({redirectTo: '/dash'});

}])
.run(function($rootScope, $location, $route, user) {
	// Initiate the user service with your UserApp App Id
	user.init({ 
		appId: '543577415e223',
    	heartbeatInterval: 600000
	});

	// once logged in set the avatar
	$rootScope.$on('user.login', function() {
		var avatar = user.current.properties.avatar.value;
		if( avatar == null) avatar = "https://s3-eu-west-1.amazonaws.com/inhaus/user.png";
		$rootScope.avatar_url = avatar;
	});

});
