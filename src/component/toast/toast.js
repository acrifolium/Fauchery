angular
	.module('app')
	.directive('toast', toastDirective)
	.service('toaster', toaster)

function toastDirective() {
	return {
		restrict: 'E',
		templateUrl: 'toast.html',
		controller: function($scope, $element, toaster, $timeout) {
			this.shown = false;
			this.displayMessage = displayMessage.bind(this);

			toaster.init(this.displayMessage);

			this.close = close.bind(this);

			function displayMessage(title, message, level) {
				if(title && message) {
					this.title = title;
					this.message = message;
					this.shown = true;
					this.level = level;
				}
				if(this.timerClose) {
					$timeout.cancel(this.timerClose);
				}
				this.timerClose = $timeout(function() {
					this.shown = false;
				}.bind(this), 5000);
			}

			function close() {
				if(this.timerClose) {
					$timeout.cancel(this.timerClose);
				}
				this.shown = false;
			}
		},
		controllerAs: 'toast'
	};
}

function toaster() {
	let showToastElement;
	return {
		init: init,
		success: success,
		info: info,
		warning: warning,
		danger: danger
	};

	function init(printFn) {
		showToastElement = printFn;
	}

	function success(title, message) {
		showToastElement(title, message, 'success');
	}

	function info(title, message) {
		showToastElement(title, message, 'info');
	}

	function warning(title, message) {
		showToastElement(title, message, 'warning');
	}

	function danger(title, message) {
		showToastElement(title, message, 'danger');
	}
}