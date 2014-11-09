'use strict';
// Returns base avatar if avatar filed is empty
angular.module('PvblicBBCTest')
.filter('noAvatar', function(){
 return function(input) {
    
    if(input == '' || input == null)
        return 'https://s3-eu-west-1.amazonaws.com/inhaus/user.png';
    else
        return input;
 }
});