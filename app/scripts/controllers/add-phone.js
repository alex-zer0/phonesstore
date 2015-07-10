'use strict';

/**
 * @ngdoc function
 * @name phonesStoreApp.controller:AddPhoneCtrl
 * @description
 * # AddPhoneCtrl
 * Controller of the phonesStoreApp
 */
angular.module('phonesStoreApp')
  .controller('AddPhoneCtrl', ['$scope', '$filter', 'apiService', '$timeout',
    function ($scope, $filter, apiService, $timeout) {

    function showMessage() {
      $scope.message = 'Phone has been added.';
      $timeout( function() {
        delete($scope.message);
      }, 1500);
    }
    function priceFiltered() {
      $scope.price = $filter('priceFilter')($scope.price, $scope.priceFormat);
    }

    $scope.price = '';
    $scope.name = '';
    $scope.description = '';
    $scope.priceFormat = 'USD';

    $scope.$watch('price', priceFiltered, true);

    $scope.addPhone = function() {
      if ( $scope.price, $scope.name, $scope.description ) {
        var phone = {
          name: $scope.name,
          price: $scope.price,
          description: $scope.description
        };
        apiService.pushPhone( phone );

        showMessage();
      }
    };
  }]);
