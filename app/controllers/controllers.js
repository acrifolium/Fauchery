var olippControllers = angular.module('olippControllers', []);

olippControllers.controller('OlippDashboardCtrl', ['$scope', 'dataWebServices', function($scope, dataWebServices) {
  dataWebServices.dashboard().then(function(results){
    console.log(results);
    $scope.dashboard = results.data;
  });
}]);

olippControllers.controller('OlippServiceCtrl', ['$scope','$routeParams', 'dataWebServices', function($scope, $routeParams, dataWebServices) {
  $scope.Id = $routeParams.id;

  dataWebServices.service($scope.Id).then(function(results){
      console.log(results);
      $scope.service = results.data;
    });
}]);

olippControllers.controller('OlippContactCtrl', ['$scope', 'blockUI', 'blockUIConfig', 'ngNotify', '$routeParams', 'dataWebServices', 
  function($scope, blockUI, blockUIConfig, ngNotify, $routeParams, dataWebServices) {

  $scope.Id = $routeParams.id;

  dataWebServices.contact($scope.Id).
                        success(function(results, status, headers, config) {
                          console.log(results);
                          $scope.contact = results;
                        }).
                        error(function(results, status, headers, config) {
                          console.log(results);
                        });

  $scope.inProgress = false;

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

olippControllers.controller('OlippMovieCtrl', ['$scope','$routeParams','dataWebServices', function($scope, $routeParams, dataWebServices) {
  $scope.MovieTitle = "Movie AngularJS Page";
  $scope.Id = $routeParams.id;

  dataWebServices.movies($scope.Id).
                        success(function(results, status, headers, config) {
                          console.log(results);
                          $scope.movies = results;
                        }).
                        error(function(results, status, headers, config) {
                          console.log(results);
                        });
}]);

