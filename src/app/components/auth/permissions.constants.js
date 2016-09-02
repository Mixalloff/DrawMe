(function(){
    angular
        .module('app.auth')
        .constant('PERMISSIONS', {
              GUEST: 0,
           CUSTOMER: 1,
             DRAWER: 2,
              ADMIN: 3,
                ALL: 4
        });
})();