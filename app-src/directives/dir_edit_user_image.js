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


			// 
			$scope.oldAvatrs = [
				"/uploads/james.jpg",
				"/uploads/andre.jpg",
				"/uploads/user.png"
			];


	$scope.myImage= $scope.oldAvatrs[0];
    $scope.myCroppedImage = '';

    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage=evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

			$scope.editAvatar = function(e) {
				alert('balls');
				return false;
			}

			// Start the jcrop

			$scope.updateCrop = function(imgSrc) {
				$scope.myImage = imgSrc;
			}
		  
		    $scope.uploadSuccess =function(fileObject) {
		    	console.log(fileObject)
			  	//$scope.crop.src = fileObject;
			}
			/*
			$scope.creds = {
			  bucket: 'pvblicbbtest',
			  access_key: 'AKIAJKGT5NBXGILGQC5A',
			  secret_key: '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'
			}
			 
			$scope.policy = 'ewogICJleHBpcmF0aW9uIjogIjIwMjAtMDEtMDFUMDA6MDA6MDBaIiwKICAiY29uZGl0aW9ucyI6IFsKICAgIHsiYnVja2V0IjogInB2YmxpY2JiY3Rlc3QifSwKICAgIFsic3RhcnRzLXdpdGgiLCAiJGtleSIsICIiXSwKICAgIHsiYWNsIjogInByaXZhdGUifSwKICAgIFsic3RhcnRzLXdpdGgiLCAiJENvbnRlbnQtVHlwZSIsICIiXSwKICAgIFsic3RhcnRzLXdpdGgiLCAiJGZpbGVuYW1lIiwgIiJdLAogICAgWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsIDAsIDUyNDI4ODAwMF0KICBdCn0=';
			$scope.signature = 'PDuXqWhQv1Pu9DLi9fL/QwcEEaA=';
			*/
			

		}
	};
});