'use strict';

/**
 * @ngdoc function
 * @name phonesStoreApp.controller:PhonesCtrl
 * @description
 * # PhonesCtrl
 * Controller of the phonesStoreApp
 */
angular.module('phonesStoreApp')
  .controller('PhonesCtrl', function ($scope, phones) {
    $scope.phones = phones;
  });
