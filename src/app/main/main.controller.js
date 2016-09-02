(function() {
    angular
        .module('app.main')
        .controller('MainController', function($mdSidenav, $mdDialog) {
            var vm = this;
            vm.toogleNav = toogleNav;
            vm.openRegisterDialog = openRegisterDialog;
            
            function toogleNav(navID) {
                $mdSidenav(navID).toggle();
            }

            function openRegisterDialog(ev) {
                $mdDialog.show({
                    controller: RegisterDialogController,
                    controllerAs: 'register',
                    templateUrl: 'app/components/auth/views/registerDialog.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: false,
                })
                .then(function(newUserData) {
                    console.dir(newUserData);
                }, function() {
                    // закрыто диалоговое окно
                });
            }

            function RegisterDialogController($mdDialog) {
                var vm = this;
                vm.ok = ok;
                vm.cancel = cancel;
                vm.roles = getRegisterRoles();

                function ok(answer) {
                    $mdDialog.hide(answer);
                };
                function cancel() {
                    $mdDialog.cancel();
                };

                function getRegisterRoles() {
                    return [
                        { name: 'Художник', type: 'drawer', id: 1 },
                        { name: 'Заказчик', type: 'customer', id: 2 }
                    ]
                }
            }
        });
})();