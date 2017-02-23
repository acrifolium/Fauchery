class adminNavbarCtrl {
  constructor (authenticationService) {
		this.authenticationService = authenticationService;
	}

	$doCheck() {
		if(angular.isDefined(this.currentUser)) {
			this.isUserLogin = true;
		}
		else {
			this.isUserLogin = false;
		}
	}

	logout() {
		this.authenticationService.logout();
		this.isUserLogin = false;
	}
}

angular
  .module('app')
  .component('adminNavbar', {
      bindings: {
				currentUser: '<'
			},
      templateUrl: 'adminNavbar.html',
      controller: adminNavbarCtrl,
      controllerAs: 'AdminNavbarCtrl'
  })
	;