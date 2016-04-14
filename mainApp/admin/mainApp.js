/**
 * Created by New User on 4/14/2016.
 */
var mainApp = angular.module('mainApp', []);

mainApp.controller('MainController', ['$scope', function($scope) {
    $scope.greeting = "Hello My Man";
}]);