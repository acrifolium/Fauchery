class authenticationService {
  constructor($http, $q, $cookies, $rootScope, $timeout) {
    this.$http = $http;
    this.$q = $q;
    this.$cookies = $cookies;
    this.$rootScope= $rootScope;
    this.$timeout = $timeout;

    this.serviceBase = 'http://localhost/fauchery/api/';
  }

  login(data) {
    var req = {
      method: 'POST',
      url: this.serviceBase + 'login-form.php',
      headers : { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: $.param(data)
    }

    let deferred = this.$q.defer();

    // this.$http(req)
    // .then(success => {
    //   deferred.resolve(success);
    // }, error => {
    //   deferred.reject(error);
    // });

    this.$timeout(function() {
      deferred.resolve({
        data: {
          username: 'Admin',
          authdata: 'ALKDUHISUBJKZBJKB544815',
          lastname: 'Tardy',
          firstname: 'Laurent'
        }
      });
    }, 2000);
    
    
    return deferred.promise;
  }

	logout() {
    this.ClearCredentials();
	}

  SetCredentials(data) { 
    this.$rootScope.globals = {
      currentUser: {
        username: data.username,
        authdata: data.authdata,
				lastname: data.lastname,
				firstname: data.firstname
      }
    };

    // set default auth header for http requests
    this.$http.defaults.headers.common['Authorization'] = 'Basic ' + this.$rootScope.globals.currentUser.authdata;
 
    let cookieExp = new Date();
    cookieExp.setDate(cookieExp.getDate() + 1);
    this.$cookies.putObject('globals', this.$rootScope.globals, { expires: cookieExp });
  }
 
	ClearCredentials() {
  	this.$rootScope.globals = {};
    this.$cookies.remove('globals');
    this.$http.defaults.headers.common.Authorization = 'Basic';
  }
}

angular
  .module('app')
  .service('authenticationService', authenticationService)
;