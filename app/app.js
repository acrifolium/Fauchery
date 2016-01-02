'use strict';
 
 /* App Module */
 
 var olippApp = angular.module('olippApp', [
   'ngRoute',
   'olippDirectives',
   'olippFilters',
   'olippControllers',
   'olippServices'
 ]);
 
 var olippServices = angular.module('olippServices', ['ngResource']);
 
 olippApp.config(['$routeProvider',
   function($routeProvider) {    
 
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