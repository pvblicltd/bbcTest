'use strict';

angular.module("utilCentered", []).directive("centered", function() {
  return {
		restrict : "E",
		transclude : true,
		template : "<div class=\"angular-center-container\">\
						<div class=\"angular-centered\" ng-transclude>\
						</div>\
					</div>"
	};
});