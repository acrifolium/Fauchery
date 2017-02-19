angular
  .module('app')
  .service('fetchApiService', fetchApiService)

function fetchApiService($http) {
  let serviceBase = 'http://localhost/api/';

  let service = {
    sendMail: sendMail
  };
  return service;

  function sendMail(data) {
    console.log('sendMail');
    return $http({
      method: "POST",
      url: serviceBase + 'contact-form.php', 
      data: $.param(data),
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
    });
  }
};

