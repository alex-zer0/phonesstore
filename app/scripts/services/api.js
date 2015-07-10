'use strict';

/**
 * @ngdoc function
 * @name phonesStoreApp.services:apiService
 * @description
 * # apiService
 * Service of the phonesStoreApp
 */

angular.module('phonesStoreApp')
  .service('apiService', ['$q', '$http', function($q, $http) {
    var service = {
      getPhone: function( id ) {

        var deferred = $q.defer();
        var promise = $http({
          method: 'POST',
          url: '/phone',
          data: id
        });
        promise.success( function(data) {
          deferred.resolve( data );
        });
        return deferred.promise;

      },
      getPhones: function() {

        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: '/phones'
        }).success( function( data ) {
          deferred.resolve( data );
        });
        return deferred.promise;

      },
      getComments: function( id ) {

        var deferred = $q.defer();
        var promise = $http({
          method: 'POST',
          url: '/comments',
          data: id
        });

        promise.success( function( data ) {
          deferred.resolve( data );
        });
        return deferred.promise;
      },
      pushComment: function( comment ) {

        var deferred = $q.defer();
        var promise = $http({
          method: 'PUT',
          url: '/comments',
          data: angular.toJson( comment )
        });

        promise.success( function( data ) {
          deferred.resolve( data );
        });
        return deferred.promise;

      },
      pushPhone: function( phone ) {

        $http({
          method: 'PUT',
          url: '/phones',
          data: angular.toJson( phone )
        });

      }
    };
    return service;
  }]);
