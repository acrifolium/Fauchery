class homeCtrl {
    constructor() {
    }
}

angular
  .module('app')
  .config(function($stateProvider) {
    var homeState = {
    	name: 'home',
    	url: '/home',
      templateUrl: 'home.html',
      controller: homeCtrl,
      controllerAs: 'HomeCtrl'
    }
		$stateProvider.state(homeState);
  })
;