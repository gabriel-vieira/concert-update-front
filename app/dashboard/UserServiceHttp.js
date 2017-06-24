'use strict';

angular.module('UserServiceHttp', [])
.factory("userService", function($http, $q) {

  var URL_API = "http://localhost:3000/api/";

  return {

    getUser: function() {
      var promise = $http.get(URL_API + 'user');
      var deferred = $q.defer();

      promise.then(function(response) {
         deferred.resolve(response.data.member);
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    }
  }
});
