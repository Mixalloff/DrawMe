(function() {
    angular
        .module('app.personal')
        .config(function($stateProvider) {
            'use strict';
            $stateProvider
                .state('personal', {
                    url: '/personal',
                    controller: 'PersonalController',
                    controllerAs: 'personal'
                })
        })
})();