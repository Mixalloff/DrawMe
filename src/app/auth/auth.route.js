(function() {
  'use strict';
  angular
    .module('app.auth')
    .config(function($stateProvider) {
      $stateProvider
        .state('main.auth', {
          url: 'auth',
          controller: 'AuthController',
          controllerAs: 'auth',
          templateUrl: 'app/auth/auth.html'
        });
    });
})();