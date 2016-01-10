var olippControllers = angular.module('olippControllers', []);

olippControllers.controller('OlippContactCtrl', ['$scope', 'blockUI', 'blockUIConfig', 'ngNotify', 'dataWebServices', 
  function($scope, blockUI, blockUIConfig, ngNotify, dataWebServices) {

  $scope.resetForm = function() {
    $scope.contact.lastname = undefined; 
    $scope.contact.firstname = undefined;
    $scope.contact.email = undefined;
    $scope.contact.company = undefined;
    $scope.contact.telephone = undefined;
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

    if($scope.company == undefined) $scope.company = "";
    if($scope.telephone == undefined) $scope.telephone = ""; 
    if($scope.message == undefined) $scope.message = "";

    // Block the user interface
    blockUIConfig.message = 'Envoi du mail en cours...';
    blockUI.start();

    dataWebServices.sendMail($scope.contact.lastname, 
                             $scope.contact.firstname, 
                             $scope.contact.email,
                             $scope.contact.company,
                             $scope.contact.telephone,
                             $scope.contact.message).
                          success(function(results, status, headers, config) {  
                                  // Unblock the user interface
                                  blockUI.stop(); 
                                  $scope.resetForm();
                                  ngNotify.set(results.message, 'noticeFaucherySuccess');
                                  console.log(results);                                                                                        
                          }).
                          error(function(results, status, headers, config) {                                  
                                  // Unblock the user interface
                                  blockUI.stop(); 
                                  ngNotify.set(results.message, 'error');
                                  console.log(results);
                          });
                        };

}]);

