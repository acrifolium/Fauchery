class contactCtrl {
    constructor(blockUI, blockUIConfig, ngNotify, fetchApiService, $i18next) {
      this.blockUI = blockUI;
      this.blockUIConfig = blockUIConfig;
      this.ngNotify = ngNotify;
      this.fetchApiService = fetchApiService;
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
      console.log('send contactCtr');
      this.ngNotify.config(
      {
        position: 'bottom',
        duration: 3000,
        sticky: false,
        button: true,
        html: false
      });

      this.ngNotify.addType('noticeFaucherySuccess', 'notice-fauchery-success');

      // if($scope.contact.company == undefined) $scope.contact.company = "";
      // if($scope.contact.telephone == undefined) $scope.contact.telephone = ""; 

      this.blockUIConfig.message = this.$i18next.t('BLOCKUI.MAIL_SENDING');
      this.blockUI.start();

      this.fetchApiService.sendMail(this.contact)
                     .success(function(data){
                        console.log(data);
                        if (data.success) { 
                          this.blockUI.stop(); 
                          this.initFormValue();
                          this.ngNotify.set(data.message, 'noticeFaucherySuccess');
                        } 
                        else {
                          this.blockUI.stop(); 
                          this.ngNotify.set(data.message, 'error');
                          }
                        });
    };
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
;
