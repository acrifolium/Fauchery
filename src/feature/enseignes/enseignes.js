class enseignesCtrl {
    constructor() {
        console.log('enseignesCtrl')
    }
}

angular
  .module('app')
  .config(function($stateProvider) {
    var enseignesState = {
    	name: 'enseignes',
    	url: '/enseignes',
      templateUrl: 'enseignes.html'
    }
		$stateProvider.state(enseignesState);
  })
  .controller('enseignesCtrl', enseignesCtrl)
;