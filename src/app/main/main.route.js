(function() {
    angular
        .module('app.main')
        .config(function($stateProvider) {
            'use strict';
            $stateProvider
                .state('main', {
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
                .state('main.offers', {
                    url: '/offers',
                    templateUrl: 'app/main/offers/offers.html',
                    controller: 'OffersController',
                    controllerAs: 'offers'
                })
                .state('main.orders', {
                    url: '/orders',
                    templateUrl: 'app/main/orders/orders.html',
                    controller: 'OrdersController',
                    controllerAs: 'orders'
                })
                .state('main.pictures', {
                    url: '/pictures',
                    templateUrl: 'app/main/pictures/pictures.html',
                    controller: 'PicturesController',
                    controllerAs: 'pictures'
                })
        })
})();