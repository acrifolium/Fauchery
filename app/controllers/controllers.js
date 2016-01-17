var olippControllers = angular.module('olippControllers', []);

olippControllers.controller('OlippContactCtrl', ['$scope', 'blockUI', 'blockUIConfig', 'ngNotify', 'faucheryServices',
  function($scope, blockUI, blockUIConfig, ngNotify, faucheryServices) {

  $scope.resetForm = function() {
    $scope.contact.lastname = undefined; 
    $scope.contact.firstname = undefined;
    $scope.contact.email = undefined;
    $scope.contact.company = undefined;
    $scope.contact.telephone = undefined;
    $scope.contact.subject = undefined;
    $scope.contact.message = undefined; 
  }

  $scope.Send = function(){

    ngNotify.config(
    {
      position: 'bottom',
      duration: 3000,
      sticky: false,
      button: true,
      html: false
    });

    ngNotify.addType('noticeFaucherySuccess', 'notice-fauchery-success');

    if($scope.contact.company == undefined) $scope.contact.company = "";
    if($scope.contact.telephone == undefined) $scope.contact.telephone = ""; 

    // Block the user interface
    blockUIConfig.message = 'Envoi du mail en cours...';
    blockUI.start();

    faucheryServices.sendMail($scope.contact)
                        .success(function(data){
                            console.log(data);
                            if (data.success) { //success comes from the return json object
                              // Unblock the user interface
                              blockUI.stop(); 
                              $scope.resetForm();
                              ngNotify.set(data.message, 'noticeFaucherySuccess');
                            } else {
                              // Unblock the user interface
                              blockUI.stop(); 
                              ngNotify.set(data.message, 'error');
                            }
                        });
    };

}]);

