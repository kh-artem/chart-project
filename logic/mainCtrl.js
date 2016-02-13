(function(angular, app){
    'use strict';

    app.controller('mainCtrl', ['$rootScope','$route', function($rootScope, $route){

        $rootScope.viewReload = function(){
            $route.reload();
        };

    }])
})(window.angular, window.angular.module('SimpleApp'));
