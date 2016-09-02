(function() {
    'use strict';

    angular
        .module('app.directives')
        .controller('dmMenuController', dmMenuController);
    
    function dmMenuController(currentUser, PERMISSIONS) {
        var vm = this;
        vm.getMenuPartial = getMenuPartial;

        function getMenuPartial() {
            var role = currentUser.getPermissions();
            switch (role) {
                case PERMISSIONS.DRAWER:
                    return "app/directives/dmMenu/partials/drawerMenu.html";
                case PERMISSIONS.CUSTOMER:
                    return "app/directives/dmMenu/partials/customerMenu.html";
                case PERMISSIONS.ADMIN:
                    return "app/directives/dmMenu/partials/adminMenu.html";
                default:
                     return "app/directives/dmMenu/partials/guestMenu.html";
            }
        }
    }
})();