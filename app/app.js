'use strict';
 
 /* App Module */
 
 var olippApp = angular.module('olippApp', [
   'ngRoute',
   'blockUI',
   'ngNotify',
   'olippDirectives',
   'olippFilters',
   'olippControllers',
   'olippServices'
 ]);

 var olippServices = angular.module('olippServices', ['ngResource']);

 olippApp.config(['$routeProvider', 'blockUIConfig',
   function($routeProvider, blockUIConfig) {
 
     $routeProvider.
       when('/dashboard', {
         templateUrl: 'Dashboard.html',
         controller: 'OlippDashboardCtrl'
       }).
       when('/service/:id', {
         templateUrl: 'Service.html',
         controller: 'OlippServiceCtrl'
       }).
       when('/contact/:id', {
         templateUrl: 'Contact.html',
         controller: 'OlippContactCtrl'
       }).
       when('/article/:id', {
         templateUrl: 'Article.html',
         controller: 'OlippArticleCtrl'
       }).
       when('/movie/:id', {
         templateUrl: 'Movie.html',
         controller: 'OlippMovieCtrl'
       }).      
       otherwise({
         redirectTo: '/dashboard',
       });

      // Change the default overlay message
      blockUIConfig.message = 'Loading';

      // Provide a custom template to use
      //blockUIConfig.template = '<pre><code><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></code></pre>';

   }])
   .run(['$rootScope', '$location', 'dataWebServices', function($rootScope, $location, dataWebServices){
 
         // Data displayed in the footer and Contact page
         if($rootScope.config === undefined)
         {
           dataWebServices.config().then(function(results){
             console.log(results);
             $rootScope.config = results.data;
           });
         }
 
        // NavBar data
        if($rootScope.tree === undefined)
        {
           dataWebServices.navigation().then(function(results){
            console.log(results);
            $rootScope.tree = results.data;

            $rootScope.dashboard = [];
            $rootScope.menuItems = [];

            for (var i = 0; i < $rootScope.tree.length; i++) {
              if($rootScope.tree[i].type == 'dashboard') {
                $rootScope.dashboard = $rootScope.tree[i];
              }
              else if($rootScope.tree[i].type != 'dashboard') {
                $rootScope.menuItems.push($rootScope.tree[i]);
              }
            }    
          });
        }

        $rootScope.date = new Date();   
 
   }]);