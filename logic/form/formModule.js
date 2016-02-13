(function (angular) {
    'use strict';

    angular.module('SimpleApp.form', [])
        .controller("formCtrl", [ '$location','$rootScope', function ( $location, $rootScope) {

            var Form = this;

            var cont = "";

            Form.page = function(path){
                $location.path(path);
            };

            Form.showContent = function($fileContent) {
                var result = {};

                if($fileContent == undefined){
                    if(Form.input_text){
                        cont = Form.input_text;
                    }
                }else{
                      cont = $fileContent;
                      Form.input_text = "";
                }

                var str = cont.replace(/,|;|-|"|'|:/g, '');
                var word = "";
                var arr = str.toLowerCase().split(" ");

                for (var i = 0; i < arr.length; i++) {
                    word = arr[i];
                    if (result[word] == undefined) {
                        result[word] = 1;
                    } else {
                        result[word]++;
                    }
                }

                $rootScope.result_obj = result;

            };

        }])
})(window.angular);