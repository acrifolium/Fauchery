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
          'ui.router',
          'jm.i18next',
          'blockUI'])
  .config(function($stateProvider, $urlRouterProvider, blockUIConfig) {
  	// For any unmatched url, redirect to /state1 
    $urlRouterProvider.otherwise("/home");
    blockUIConfig.message = 'Loading';        
  })
;

