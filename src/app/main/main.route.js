(function() {
    angular
        .module('app.main')
        .config(function($stateProvider) {
            'use strict';
            $stateProvider
                // .state('common', {
                //     url: '/common',
                //     templateURL: 'app/common/common.html',
                //     controller: 'CommonController',
                //     controllerAs: 'common'
                //     // views: {
                //     //     "": {
                //     //         templateURL: 'app/common/common.html',
                //     //         controller: 'CommonController',
                //     //         controllerAs: 'common'
                //     //     },
                //     //     ""
                //     // }
                // })
                .state('main', {
                    // url: '/',
                    templateUrl: 'app/main/main.html',
                    controller: 'MainController',
                    controllerAs: 'main',
                    abstract: true
                })
                .state('main.home', {
                    url: '/',
                    templateUrl: 'app/main/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'home'
                })
                // .state('common.main', {
                //     url: '/main',
                //     views: {
                //         'menu': {
                //             templateURL: 'app/common/customer/menu.html',
                //             controller: 'CustomerController',
                //             controllerAs: 'customer'
                //         }
                //     }
                // })
                // .state('common.customer', {
                //     url: '/customer',
                //     views: {
                //         'menu': {
                //             templateURL: 'app/common/customer/menu.html',
                //             controller: 'CustomerController',
                //             controllerAs: 'customer'
                //         }
                //     }
                // })
        })
})();