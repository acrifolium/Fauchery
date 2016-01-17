var faucheryServices = angular.module('faucheryServices', ['ngResource']);

faucheryServices.factory('faucheryServices', ['$http',
  function($http){
  	
    'use strict';

  	var serviceBase = 'api/';
    var obj = {};

    obj.sendMail = 
    function($contact){
             return $http({
                          method: "POST",
                          url: serviceBase + 'contact-form.php', 
                          data: $.param($contact),
                          headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
                        });
             }

	  return obj; 
	
  }]);
