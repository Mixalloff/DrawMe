(function() {
    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider, PERMISSIONS) {
            'use strict';
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            
            // $stateProvider
            //     .state('common', {
            //         url: '/',
            //         templateUrl: 'app/common/common.html',
            //         controller: 'CommonController',
            //         controllerAs: 'common',
            //         // abstract: true
            //     })
            //     .state('page404', {
            //         url: '/404_page_not_found',
            //         templateUrl: 'app/page404/page404.html'
            //     });
            // $urlRouterProvider.otherwise('/404_page_not_found');

            $stateProvider
                .state('app', {
                    abstract: true,
                    template: '<ui-view></ui-view>',
                    // resolve: {
                    //     autologin: autologin
                    // }
                });
        });
})();
