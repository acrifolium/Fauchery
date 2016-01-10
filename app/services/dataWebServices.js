'use strict';

/* dataWebServices */

olippServices.factory('dataWebServices', ['$http',
  function($http){
  	
  	var serviceBase = 'api/'
    var obj = {};

    obj.sendMail = function($lastname, $firstname, $email, $company, $telephone, $message){
      return $http({
                    method: "post",
                    url: serviceBase + 'sendMail', 
                    data: {
                      'lastname': $lastname, 
                      'firstname': $firstname, 
                      'email': $email,
                      'company': $company,
                      'telephone': $telephone,
                      'message': $message
                    }
                  });
    }
	return obj; 
	
  }]);
