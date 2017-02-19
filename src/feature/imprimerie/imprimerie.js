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
      templateUrl: 'imprimerie.html',
      controller: imprimerieCtrl,
      controllerAs: 'ImprimerieCtrl'
    }
		$stateProvider.state(imprimerieState);
  })
;