(function() {
    'use strict';

    angular
        .module('app.offers')
        .controller('OffersController', offersContoller);

    function offersContoller() {
        var vm = this;
        vm.loading = false;
    }
})();