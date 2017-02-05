'use strict';

angular.module('UserServiceMock', [])
.factory("userService", function() {

  var user = {
    "displayName":"arkangel",
    "firstName":"gabriel",
    "lastName":"vieira",
    "email":"gabriel93250@gmail.com",
    "picture":"https://api.deezer.com/user/22249217/image?size=medium"
  }

  return {
    getUser: function() {
      return user;
    }
  }
});
