(function () {
  'use strict';
  angular
    .module('app.auth')
    .factory('authHelper', authHelper);

  function authHelper($location, $mdDialog, PERMISSIONS, $state) {
    var factory = {
      login: login,
      noPermissionsRedirect: defaultPageRedirectByPermissions
    };

    return factory;

    function login(loginData) {
        // Получение permissions
        // ...
// MOCK test data
if (loginData.login == 'customer') loginData.permissions = PERMISSIONS.CUSTOMER;
if (loginData.login == 'drawer') loginData.permissions = PERMISSIONS.DRAWER;

        // Заглушка установка токена. Будет подтягиваться с серва
          var token = '';
          switch (loginData.permissions) {
              case PERMISSIONS.CUSTOMER: {
                  loginData.token = 'customer';
                  break;
              }
              case PERMISSIONS.DRAWER: {
                  loginData.token = 'drawer';
                  break;
              }
              case PERMISSIONS.ADMIN: {
                  loginData.token = 'admin';
                  break;
              }
          }
        // Полученные данные с серва mock
        var dataFromServer = loginData;

        var deferred = $q.defer();
        if (loginData.permissions != PERMISSIONS.GUEST) {
          currentUser.setData(dataFromServer);
          deferred.resolve(dataFromServer);
        }
        else {
          deferred.reject();
        }
        
        defaultPageRedirectByPermissions(loginData.permissions);
        return deferred.promise;
    }

    // Переброс на стартовую страницу в зависимости от роли пользователя
    function defaultPageRedirectByPermissions(permission) {
        switch (permission) {
          case PERMISSIONS.GUEST:   { $state.go('auth'); break; }
          case PERMISSIONS.CUSTOMER: { $state.go('main.customer'); break; }
          case PERMISSIONS.DRAWER: { $state.go('main.drawer'); break; }
          case PERMISSIONS.ADMIN:   { $state.go('main.admin'); break; }
        }
    }
  }
})();
