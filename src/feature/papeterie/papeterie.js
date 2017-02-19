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
      templateUrl: 'papeterie.html',
      controller: papeterieCtrl,
      controllerAs: 'PapeterieCtrl'
    }
		$stateProvider.state(papeterieState);
  })
;