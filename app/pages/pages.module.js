/**
 * Created by joao on 31/03/17.
 */
(function () {
    'use strict';

    angular.module("example.pages", [
        "example.pages.hello"
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }]);
}());