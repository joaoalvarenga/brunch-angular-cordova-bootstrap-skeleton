/**
 * Created by joao on 31/03/17.
 */
(function () {
    'use strict';

    angular.module("example.pages.hello")
        .controller("HelloCtrl", ["$scope", function($scope) {
            $scope.name = "";
        }]);
}());