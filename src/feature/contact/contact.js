class contactService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
    
    this.serviceBase = 'http://localhost/fauchery/api/';
  }

  send(data) {
    var req = {
      method: 'POST',
      url: this.serviceBase + 'contact-form.php',
      headers : { 
        'Content-Type': 'application/x-www-form-urlencoded'
      } ,
      data: $.param(data)
    }

    let deferred = this.$q.defer();

    this.$http(req)
    .then(success => {
      deferred.resolve(success);
    }, error => {
      deferred.reject(error);
    });

    return deferred.promise;
  }
}

class contactCtrl {
  constructor(blockUI, blockUIConfig, notifyService, contactService, $i18next) {
    this.blockUI = blockUI;
    this.blockUIConfig = blockUIConfig;
    this.notifyService = notifyService;
    this.contactService = contactService;
    this.$i18next = $i18next;
      
    this.initFormValue();    
  }

  initFormValue() {
    this.contact = {
      lastname: '',
      firstname: '',
      email: '',
      company: '',
      telephone: '',
      subject: '',
      message: ''
    };
  }

  send(){
    this.loading = true;
    this.contactService.send(this.contact)
    .then(response => {
      console.log('response ctrl',response);
      this.loading = false;
      this.initFormValue();
      
    }, error => {
      console.log('error ctrl',error.data);
      this.loading = false;
    })
  }
}

angular
  .module('app')
  .config(function($stateProvider) {
    var contactState = {
    	name: 'contact',
    	url: '/contact',
      templateUrl: 'contact.html',   
      controller: contactCtrl,
      controllerAs: 'ContactCtrl'
    }
		$stateProvider.state(contactState);
  })
  .service('contactService', contactService)
;
