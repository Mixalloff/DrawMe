(function() {
    angular
        .module('app.main')
        .controller('MainController', function() {
            var vm = this;
            vm.toogleNav = toogleNav;
            
            function toogleNav(navID) {
                $mdSidenav(navID).toggle();
            }
        });
})();