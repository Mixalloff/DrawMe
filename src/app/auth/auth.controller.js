(function(){
    angular
        .module('app.auth')
        .controller('AuthController',
            function (authHelper, $state, $mdDialog) {
                var vm = this;
                vm.authorize = authorize;

                function authorize(login, password) {
                    authHelper.login(login, password);  
                }
            }
        ); 
})();