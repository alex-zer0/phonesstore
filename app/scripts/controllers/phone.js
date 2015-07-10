'use strict';

/**
 * @ngdoc function
 * @name phonesStoreApp.controller:PhoneCtrl
 * @description
 * # PhoneCtrl
 * Controller of the phonesStoreApp
 */
angular.module('phonesStoreApp')
  .controller('PhoneCtrl', function ($scope, phone, comments) {
    $scope.phone = phone;
    $scope.comments = comments;
  });
