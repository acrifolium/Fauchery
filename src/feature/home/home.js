class homeCtrl {
    constructor() {
        console.log('homeCtrl')
    }
}

angular
  .module('app')
  .config(function($stateProvider) {
    var homeState = {
    	name: 'home',
    	url: '/home',
      templateUrl: 'home.html'
    }
		$stateProvider.state(homeState);
  })
  .controller('homeCtrl', homeCtrl)
;