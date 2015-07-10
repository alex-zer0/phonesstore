'use strict';

/**
 * @ngdoc overview
 * @name phonesStoreApp
 * @description
 * # phonesStoreApp
 *
 * Main module of the application.
 */
angular
  .module('phonesStoreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngMockE2E',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/phones.html',
        controller: 'PhonesCtrl',
        resolve: {
          phones: function( apiService ) {
            return apiService.getPhones();
          }
        }
      })
      .when('/phone/:id', {
        templateUrl: 'views/phone.html',
        controller: 'PhoneCtrl',
        resolve: {
          phone: function(apiService, $route) {
            return apiService.getPhone( $route.current.params.id );
          },
          comments: function(apiService, $route) {
            return apiService.getComments( $route.current.params.id );
          }
        }
      })
      .when('/add-phone', {
        templateUrl: 'views/add-phone.html',
        controller: 'AddPhoneCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($httpBackend, localStorageService) {

    $httpBackend.whenGET('/phones').respond( function() {
      var phones = localStorageService.getPhones();
      return [200, phones, {}];
    });

    $httpBackend.whenPOST('/phone').respond( function(method, url, data) {
      var phone = localStorageService.getPhone(data);
      return [200, phone, {}];
    });

    $httpBackend.whenPOST('/comments').respond( function(method, url, data) {
      var comments = localStorageService.getComments(data);
      return [200, comments, {}];
    });

    $httpBackend.whenPUT('/comments').respond( function(method, url, data) {
      var localComment = angular.fromJson( data );
      localStorageService.pushComment( localComment );
      var comments = localStorageService.getComments( localComment.phoneId );
      return [200, comments, {}];
    });

    $httpBackend.whenPUT('/phones').respond( function(method, url, data) {
      var localPhone = angular.fromJson( data );
      localStorageService.pushPhone( localPhone );
      return [200, {}, {}];
    });

    $httpBackend.whenGET(/\.html$/).passThrough();
    $httpBackend.whenGET(/\.css/).passThrough();

  });
