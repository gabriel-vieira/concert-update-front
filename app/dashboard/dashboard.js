'use strict';

angular.module('myApp.dashboard', ['ngRoute', "UserServiceHttp", "ArtistCardDirective"])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])
.controller('DashboardCtrl', ['$scope', 'userService', function($scope, userService) {
  $scope.isConnected = userService.getUser();
}]);
