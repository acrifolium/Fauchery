var olippApp = angular.module('app', [
   'ngRoute',
   'blockUI',
   'ngNotify',
   'olippDirectives',
   'olippFilters',
   'olippControllers',   
   'faucheryServices'
 ]);

 app.config(function($routeProvider, blockUIConfig) {
 
    $routeProvider
      .when('', {
        templateUrl: "Dashboard.html"
      });

      // Change the default overlay message
      blockUIConfig.message = 'Loading';
   })
   .run(function($rootScope, $location){

      $rootScope.date = new Date();   
 
   });
