/* DOCUMENT INFORMATION
	- Document: Pvblic Ltd
	- Version:  0.0.1
	- Client:   BBC
	- Author:   James A B Gray   
*/

'use strict';

angular.module("editUserImageMod", ['ngImgCrop', 'flow'])
.config(['flowFactoryProvider', function (flowFactoryProvider) {
    flowFactoryProvider.defaults = {
		target: '/uploads',
		permanentErrors: [500, 501],
		maxChunkRetries: 1,
		chunkRetryInterval: 5000,
		simultaneousUploads: 1
    };
    flowFactoryProvider.on('catchAll', function (event) {
      //console.log('catchAll', arguments);
    });
 }])
.directive('file', function() {
	return {
		restrict: 'AE',
		scope: {
			file: '@'
		},
		link: function(scope, el, attrs){
			el.bind('change', function(event){
				var files = event.target.files;
				var file = files[0];
				scope.file = file;
				scope.$parent.file = file;
				scope.$apply();
			});
		}
	}
})
.directive("editUserImage", function() {
	function link(scope, element, attrs) {
		

	}
  	return {
  		link: link,
  		scope: {
            eventHandler: '&ngClick'
        },
		templateUrl: 'templates/directives/edit_user_image.html',
		controller: function($scope, $element, $attrs) {

			$scope.avatar_url = 'https://s3.amazonaws.com/files.parse.com/e8a828cb-7c35-471c-ac64-1d463daed4e7/32923651-05bc-4272-9bca-a05b679a4ad5-1400755401.png';


			// Set the avatar images
			$scope.oldAvatrs = [
				"/uploads/james.jpg",
				"/uploads/andre.jpg",
				"/uploads/user.png"
			];

			$scope.myImage= $scope.oldAvatrs[0];
		        $scope.myCroppedImage = '';

		        $scope.updateCropHeight = function() {
			    var theheight = angular.element('.cropArea').find('canvas').height();
			    angular.element('.cropArea').css({'height': theheight})
		        }

			// cop update on previous image select
			$scope.updateCrop = function(imgSrc) {
				$scope.myImage = imgSrc;
			}
		  
		    
                        $scope.uploadSuccess =function(fileObject) {
		    	//console.log(fileObject)
			  	//$scope.crop.src = fileObject;
			}
			

		}
	};
});
