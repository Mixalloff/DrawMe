angular.module('app',
    [
        'app.core',
        'app.auth',
        'app.main',
        'app.personal',
        'app.directives'
    ])
.run(function($http, $cookies, $rootScope, authHelper, currentUser) {
        $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
        $http.defaults.headers.common['X-CSRFToken'] = $cookies.csrftoken;

        // Handle exceptions
        $rootScope.$on('$stateChangeError', function() {
            var error = arguments[5];
            throw error;
        });

        // Проверка возможности доступа пользователя к странице
        $rootScope.$on('$stateChangeStart',
         function(evt, next, current) {
             if (next.data && !currentUser.checkPermissions(next.data.permissions)) {
                 authHelper.noPermissionsRedirect(currentUser.getPermissions());
                 evt.preventDefault();
             }
         });
    }
);