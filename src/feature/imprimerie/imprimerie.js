class imprimerieCtrl {
    constructor() {
        console.log('imprimerieCtrl')
    }
}

angular
  .module('app')
  .config(function($stateProvider) {
    var imprimerieState = {
    	name: 'imprimerie',
    	url: '/imprimerie',
      templateUrl: 'imprimerie.html'
    }
		$stateProvider.state(imprimerieState);
  })
  .controller('imprimerieCtrl', imprimerieCtrl)
;