window.i18next.use(window.i18nextXHRBackend);
window.i18next.init({
  debug: true,
  lng: 'fr', // If not given, i18n will detect the browser language.
  fallbackLng: 'fr', // Default is dev
  backend: {
  	loadPath: './locales/{{lng}}.json'
  },
  useCookie: false,
  useLocalStorage: false
  }, function (err, t) {
  	console.log('resources loaded');
  });

angular
  .module('app', [
          'ngAnimate',
          'ngCookies',
          'ui.router',
          'jm.i18next'])
  .config(function($stateProvider, $urlRouterProvider) {
  	// For any unmatched url, redirect to /state1 
    $urlRouterProvider.otherwise("/home");      
  })
  .run(function($rootScope, $cookies, $http) {
    $rootScope.globals = $cookies.getObject('globals') || {};

    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    }

    console.log('run - $rootScope', $rootScope.globals);
    console.log('run - $http.defaults.headers.common[Authorization]', $http.defaults.headers.common['Authorization']);
  })
;

