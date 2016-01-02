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

olippControllers.controller('OlippContactCtrl', ['$scope','$routeParams', 'dataWebServices', function($scope, $routeParams, dataWebServices) {
  $scope.Id = $routeParams.id;

  dataWebServices.contact($scope.Id).
                        success(function(results, status, headers, config) {
                          console.log(results);
                          $scope.contact = results;
                        }).
                        error(function(results, status, headers, config) {
                          console.log(results);
                        });

  $scope.status = 0;

  $scope.Send = function(){

  if($scope.company == undefined) $scope.company = "";
  if($scope.telephone == undefined) $scope.telephone = ""; 
  if($scope.message == undefined) $scope.message = "";

  dataWebServices.sendMail($scope.contact.lastname, 
                           $scope.contact.firstname, 
                           $scope.contact.email,
                           $scope.contact.company,
                           $scope.contact.telephone,
                           $scope.contact.message).
                        success(function(results, status, headers, config) {
                                console.log("success");
                                console.log(results.data);
                                $scope.status = 1; 
                                $scope.successMessage = results.message;    
                                $scope.contact.lastname = ""; 
                                $scope.contact.firstname = "";
                                $scope.contact.email = "";
                                $scope.contact.company = "";
                                $scope.contact.telephone = "";
                                $scope.contact.message = "";                      
                        }).
                        error(function(results, status, headers, config) {
                                console.log("error");
                                console.log(results.data);
                                $scope.status = 2;
                                $scope.errorMessage = results.data.message; 
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

