'use strict';

angular.module('pidgeotApp.auth', [
  'pidgeotApp.constants',
  'pidgeotApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
