class papeterieCtrl {
    constructor() {
        console.log('papeterieCtrl')
    }
}

angular
  .module('app')
  .config(function($stateProvider) {
    var papeterieState = {
    	name: 'papeterie',
    	url: '/papeterie',
      templateUrl: 'papeterie.html'
    }
		$stateProvider.state(papeterieState);
  })
  .controller('papeterieCtrl', papeterieCtrl)
;