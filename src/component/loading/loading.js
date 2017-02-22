function loadingOverlay() {
	return {
		restrict: 'A',
		scope: {
			loadingOverlay: '='
		},
		link: function($scope, $element) {
			$element.css('position', 'relative');
			$element.append(
				`<div id="loading-overlay" class="text-center">
					<i class="fa fa-spinner fa-pulse"></i>
					&nbsp;
					<span>Loading...</span>
				</div>`);
			let tagDocument = document.getElementById('loading-overlay');			
			let overlay = angular.element(tagDocument);
			$scope.$watch('loadingOverlay', displayed => {
				if(displayed) {
					overlay.css({
						height: $element[0].offsetHeight + 'px',
						opacity: 0.8
					});
				}
				else {
					overlay.css({
						height: 0,
						opacity: 0
					});
				}
			})
		}
	}
}

angular
  .module('app')
  .directive('loadingOverlay', loadingOverlay)
  ;