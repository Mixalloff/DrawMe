(function() {
    'use strict';

    // import './style.scss';
    // import template from './view.html';
    angular
        .module('app.directives')
        .directive('dmMenu', dmMenu);
    
    function dmMenu() {
         return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/dmMenu/dmMenu.html',
            controller: 'dmMenuController',
            controllerAs: 'dmMenu'
         }
    }
})();