'use strict';

angular.module('myApp.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])

.controller('DashboardCtrl', ['$scope',function($scope) {

  $scope.user = {
    "displayName":"arkangel",
    "firstName":"gabriel",
    "lastName":"vieira",
    "email":"gabriel93250@gmail.com",
    "picture":"https://api.deezer.com/user/22249217/image?size=medium"
  }
}]);
