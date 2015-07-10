'use strict';

/**
 * @ngdoc filter
 * @name phonesStoreApp.filter:priceFilter
 * @description
 * # priceFilter
 */
angular.module('phonesStoreApp')
  .filter('priceFilter', function () {
    return function( input, format ) {

      input = input.replace(/(\,)*[a-zA-z]*/g, '');
      if( input < 1000 ) {
        return input;
      }
      var tempInput = input.split('.')[0];
      var priceString = tempInput.toString().split('').reverse().join('');
      var priceLength = priceString.length;
      var price = '';

      switch( format ) {
        case 'USD':
          var i = 0;
          while ( i < priceLength / 3 - 1) {
            price += priceString.substring(i*3, i*3 + 3) + ',';
            i++;
          }
          price += priceString.substring(i * 3);
          price = price.split('').reverse().join('');
          if ( input.split('.')[1] === '' || input.split('.')[1] ) {
            price += '.' + input.split('.')[1];
          }
          return price;
        default:
          return input;
      }

    };
  });
