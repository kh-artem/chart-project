(function (angular) {
    'use strict';

    angular.module('SimpleApp.result', [])
        .controller("resultCtrl", ['$location', '$rootScope', function ($location, $rootScope) {
            var Result = this;

            var obj = $rootScope.result_obj;

            var list = [];

            Result.bar = {
                labels: [],
                data: []
            };

            for (var key in obj) {
                if (obj[key] !== 1 && key.length > 1) {
                    Result.bar.labels.push(key);
                    list.push(obj[key]);
                }
            }

            Result.bar.data.push(list);
        }])
})(window.angular);
