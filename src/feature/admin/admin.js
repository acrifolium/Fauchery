class adminCtrl {
  constructor(authenticationService, $i18next, toaster, $state, $timeout) {
    this.authenticationService = authenticationService;
    this.$i18next = $i18next;
    this.toaster = toaster;
    this.$state = $state;
    this.$timeout = $timeout;

    this.loading = false;
    this.initFormValue(); 
  }

  initFormValue() {
    this.user = {
      login: '',
      password: ''
    };
  }

  login(){
    this.loading = true;
    this.authenticationService.login(this.user)
    .then(response => {
      console.log(response);
      this.loading = false;
      let title = this.$i18next.t('ADMIN.LOGIN.TITLE_SUCCESS');
      let message = `${response.data.username}: ${response.data.firstname} ${response.data.lastname}`;
      this.toaster.success(title, message);
      this.initFormValue();
      this.authenticationService.SetCredentials(response.data);
      this.$timeout(() => {this.$state.go('home')}, 3000);     
    }, error => {
      this.loading = false;
      let title = this.$i18next.t('ADMIN.LOGIN.TITLE_ERROR');
      let message = error.data;
      this.toaster.danger(title, message);      
    })
  }  
}

angular
  .module('app')
  .config(function($stateProvider) {
    var adminState = {
    	name: 'admin',
    	url: '/admin',
      templateUrl: 'admin.html',   
      controller: adminCtrl,
      controllerAs: 'AdminCtrl'
    }
		$stateProvider.state(adminState);
  })
  ;
