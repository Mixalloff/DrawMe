(function() {
    angular
        .module('app.common')
        .controller('CommonController', function() {
            var vm = this;
            vm.toogleNav = toogleNav;
            
            function toogleNav(navID) {
                $mdSidenav(navID).toggle();
            }
        });
})();