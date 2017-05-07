'use strict';

angular.module('UserServiceHttp', [])
.factory("userService", function($http) {

  // var member = {
  //   "displayName":"arkangel",
  //   "firstName":"gabriel",
  //   "lastName":"vieira",
  //   "email":"gabriel93250@gmail.com",
  //   "picture":"https://api.deezer.com/user/22249217/image?size=medium"
  // }
  var URL_API = "http://localhost:3000/api/";

  var member = {
      "hasBeenConnected": false
  };

  return {
    getUser: function() {
      var promise = $http.get(URL_API + 'user');
      promise.then(function(response) {
        console.log('response',response);
      }, function(error) {
        console.log('error',error);
      });
    }
  }
});
