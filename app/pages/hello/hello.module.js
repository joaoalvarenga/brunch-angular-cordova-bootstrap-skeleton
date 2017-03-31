/**
 * Created by joao on 31/03/17.
 */
(function () {
    'use strict';

    angular.module("example.pages.hello", [
    ])
        .config(['$stateProvider',function ($stateProvider) {
            $stateProvider
                .state('hello', {
                    url: '/',
                    templateUrl: 'app/pages/hello/hello.html',
                    title: 'Hello',
                    controller: "HelloCtrl"
                });

        }]);
}());