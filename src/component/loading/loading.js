function loading() {
	return {
		restrict: 'A',
		scope: {
			loadingOverlay: '='
		},
		link: function($scope, $element) {
			$element.css('position', 'relative');
			$element.append(
				`<div class="loading-overlay text-center">
					<i class="fa fa-spinner fa-pulse"></i>
					$nbsp;
					<span>Loading...</span>
				</div>`);
			let overlay = $element.find('loading-overlay');
			$scope.$watch('loadingOverlay', displayed => {
				if(displayed) {
					overlay.css('height', $element.height());
					overlay.css('opacity', 0.8);
				}
				else {
					overlay.css('height', 0);
					overlay.css('opacity', 0);
				}
			})
		}
	}
}

angular
  .module('app')
  .directive('loading', loading)
  ;