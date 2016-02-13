(function (angular) {
    'use strict';

    var app = angular.module('SimpleApp', [

        'ngRoute',
        'SimpleApp.form',
        'SimpleApp.result',
        'chart.js'

    ])

        /*
         ###
         ### ROUTING
         ###
         */
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

            $routeProvider
                .when('/form', {
                    templateUrl: 'templates/pages/form.html',
                    controllerAs: 'Form',
                    controller: 'formCtrl',
                    title: 'Form'
                })
                .when('/result', {
                    templateUrl: 'templates/pages/result.html',
                    controllerAs: 'Result',
                    controller: 'resultCtrl',
                    title: 'Result'
                })

                .otherwise({
                    redirectTo: '/form'
                });


            $locationProvider.hashPrefix = '!';
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }])

        .config(['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        }]);


    /*
     ###
     ### BOOTSTRAPING APP
     ###
     */
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['SimpleApp']);
    });
})(window.angular);

