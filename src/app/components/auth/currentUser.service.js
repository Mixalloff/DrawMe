(function() {
    'use strict';
    angular
        .module('app.auth')
        .factory('currentUser', currentUser);

    function currentUser($q, PERMISSIONS, $cookieStore) {
        var User = this;
        User.currentPermissions = PERMISSIONS.GUEST;
        User.currentData = {};
        var factory = {
            getPermissions: getPermissions,
            setPermissions: setPermissions,
            checkPermissions: checkPermissions,

            setData: setData,
            clearData: clearData,
            logout: logout
        }

        return factory;

        function logout() {
            clearData();
            $cookieStore.remove('token');
        }

        // Устанавливает данные текущему пользователю
        function setData(data) {
            User.currentData = data;
            setPermissions(data.permissions || 0);
            
            $cookieStore.put('token', data.token);
            $cookieStore.put('login', data.login);
        }

        // Очистка данных пользователя
        function clearData() {
            User.currentData = {};
            setPermissions(PERMISSIONS.GUEST);
        }

        /*
           Проверка доступов
           @param neededPermissions (Array) Массив разрешенных ролей для доступа к странице
           @return (bool) Возможность доступа
        */
        function checkPermissions(neededPermissions) {
            if (!getPermissions()) {
                // TODO: Получать permissions с сервера по токену
                // Mock
                switch ($cookieStore.get('token')) {
                    case 'customer': {
                        setPermissions(PERMISSIONS.CUSTOMER);
                        break;
                    }
                    case 'drawer': {
                        setPermissions(PERMISSIONS.DRAWER);
                        break;
                    }
                    case 'admin': {
                        setPermissions(PERMISSIONS.ADMIN);
                        break;
                    }
                }
            }

            // Проверка соответствия текущих разрешений и разрешений страницы
            if (neededPermissions.indexOf(PERMISSIONS.ALL) != -1) return true;
            if (neededPermissions.length) {
                if (neededPermissions.indexOf(getPermissions()) != -1) {
                    return true;
                }
            }
            return false;
        }

        // Возвращает зарезервированное число для доступов
        function getPermissions() {
            User.currentPermissions = User.currentPermissions || PERMISSIONS.GUEST;
            return User.currentPermissions;
        }

        // Устанавливает текущие доступы
        function setPermissions(permissions) {
            User.currentPermissions = permissions;
        }
    }
})();