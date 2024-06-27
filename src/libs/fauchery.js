"use strict";var olippApp=angular.module("olippApp",["ngRoute","blockUI","ngNotify","pascalprecht.translate","olippDirectives","olippFilters","olippControllers","faucheryServices"]);olippApp.config(["$routeProvider","blockUIConfig","$translateProvider",function(e,t,o){e.when("/dashboard",{templateUrl:"Dashboard.html"}).when("/imprimerie",{templateUrl:"Imprimerie.html"}).when("/papeterie",{templateUrl:"Papeterie.html"}).when("/enseignes",{templateUrl:"Enseignes.html"}).when("/contact",{templateUrl:"Contact.html",controller:"OlippContactCtrl"}).when("/movie",{templateUrl:"Movie.html"}).otherwise({redirectTo:"/dashboard"}),t.message="Loading",o.useUrlLoader("App_Data/Languages/fr.json"),o.preferredLanguage("fr"),o.useSanitizeValueStrategy("escapeParameters")}]).run(["$rootScope","$location","$translate",function(e,t,o){e.DashMovies=[],o("DASHBOARD.MOVIES.ONE").then(function(t){e.DashMovies.push(t)}),o("DASHBOARD.MOVIES.TWO").then(function(t){e.DashMovies.push(t)}),o("DASHBOARD.MOVIES.THREE").then(function(t){e.DashMovies.push(t)}),e.Movies=[],o("MOVIES.ONE").then(function(t){e.Movies.push(t)}),o("MOVIES.TWO").then(function(t){e.Movies.push(t)}),o("MOVIES.THREE").then(function(t){e.Movies.push(t)}),o("MOVIES.FOUR").then(function(t){e.Movies.push(t)}),o("MOVIES.FIVE").then(function(t){e.Movies.push(t)}),o("MOVIES.SIX").then(function(t){e.Movies.push(t)}),o("MOVIES.SEVEN").then(function(t){e.Movies.push(t)}),o("MOVIES.HEIGHT").then(function(t){e.Movies.push(t)}),o("MOVIES.NINE").then(function(t){e.Movies.push(t)}),o("MOVIES.TEN").then(function(t){e.Movies.push(t)}),o("MOVIES.ELEVEN").then(function(t){e.Movies.push(t)}),e.date=new Date}]);var olippControllers=angular.module("olippControllers",[]);olippControllers.controller("OlippContactCtrl",["$scope","blockUI","blockUIConfig","ngNotify","faucheryServices",function(e,t,o,n,i){e.resetForm=function(){e.contact.lastname=void 0,e.contact.firstname=void 0,e.contact.email=void 0,e.contact.company=void 0,e.contact.telephone=void 0,e.contact.subject=void 0,e.contact.message=void 0},e.Send=function(){n.config({position:"bottom",duration:3e3,sticky:!1,button:!0,html:!1}),n.addType("noticeFaucherySuccess","notice-fauchery-success"),void 0==e.contact.company&&(e.contact.company=""),void 0==e.contact.telephone&&(e.contact.telephone=""),o.message="Envoi du mail en cours...",t.start(),i.sendMail(e.contact).success(function(o){console.log(o),o.success?(t.stop(),e.resetForm(),n.set(o.message,"noticeFaucherySuccess")):(t.stop(),n.set(o.message,"error"))})}}]);var olippDirectives=angular.module("olippDirectives",[]);olippDirectives.directive("pwCheck",[function(){return{require:"ngModel",link:function(e,t,o,n){var i="#"+o.pwCheck;t.add(i).on("keyup",function(){e.$apply(function(){n.$setValidity("pwmatch",t.val()===$(i).val())})})}}}]);var olippFilters=angular.module("olippFilters",[]);olippFilters.filter("trusted",["$sce",function(e){return function(t){return e.trustAsResourceUrl(t)}}]);var faucheryServices=angular.module("faucheryServices",["ngResource"]);faucheryServices.factory("faucheryServices",["$http",function(e){var t="api/",o={};return o.sendMail=function(o){return e({method:"POST",url:t+"contact-form.php",data:$.param(o),headers:{"Content-Type":"application/x-www-form-urlencoded"}})},o}]);