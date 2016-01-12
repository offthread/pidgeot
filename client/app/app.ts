'use strict';

angular.module('pidgeotApp', [
  'pidgeotApp.auth',
  'pidgeotApp.admin',
  'pidgeotApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
