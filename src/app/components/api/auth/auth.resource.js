(function() {
    'use strict';

    angular
        .module('app.auth')
        .factory('AuthAPI', AuthApiFactory);

    function AuthApiFactory($resource, config) {
        return {
            authorize: 
                function() {
                    return $resource(config.serverAPI + '/authorize/:authData',
                                {},
                                {
                                    get: { 
                                        method:'GET',
                                        params: {
                                            authData: '@authData'
                                        },
                                        isArray:true
                                    },
                                    //interceptors: ['errorHandlerInterceptor']
                                }
                            );
                },
            register:
                function() {
                    return $resource(config.serverAPI + '/register/:newUser',
                                {},
                                {
                                    get: { method:'GET', isArray:true },
                                    //interceptors: ['errorHandlerInterceptor']
                                }
                            );
                },
        }
    }
})();
