var olippApp = angular.module('olippApp', [
   'ngRoute',
   'blockUI',
   'ngNotify',
   'olippDirectives',
   'olippFilters',
   'olippControllers',   
   'faucheryServices'
 ]);

 olippApp.config(function($routeProvider, blockUIConfig) {
 
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
