'use strict';

angular.module('myApp.dashboard', ['ngRoute', "UserServiceMock"])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])

.controller('DashboardCtrl', ['$scope', 'userService', function($scope, userService) {
  $scope.user = userService.getUser();
}]);
