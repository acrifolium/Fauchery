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
      },
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
  constructor(contactService, $i18next, toaster) {
    this.contactService = contactService;
    this.$i18next = $i18next;
    this.toaster = toaster;

    this.loading = false;
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
      this.loading = false;
      let title = this.$i18next.t('CONTACT.SEND.TITLE_SUCCESS');
      let message = response.data;
      this.toaster.success(title, message);
      this.initFormValue();
      
    }, error => {
      this.loading = false;
      let title = this.$i18next.t('CONTACT.SEND.TITLE_ERROR');
      let message = error.data;
      this.toaster.danger(title, message);      
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
