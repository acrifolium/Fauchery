class contactCtrl {
    constructor() {
        console.log('contactCtrl')
    }
}

angular
  .module('app')
  .config(function($stateProvider) {
    var contactState = {
    	name: 'contact',
    	url: '/contact',
      templateUrl: 'contact.html'
    }
		$stateProvider.state(contactState);
  })
  .controller('contactCtrl', contactCtrl)
;