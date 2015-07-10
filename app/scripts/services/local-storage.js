'use strict';

/**
 * @ngdoc function
 * @name phonesStoreApp.services:localStorageService
 * @description
 * # localStorageService
 * Service of the phonesStoreApp
 */

angular.module('phonesStoreApp')
  .factory('localStorageService', function() {
    var phones = [
      {
        id: 1,
        name: 'Motorolla Example 1',
        description: 'simple useful phone',
        price: '1,231,203.12'
      },
      {
        id: 2,
        name: 'Steel matches',
        description: 'Strange new goods be masters from England.',
        price: '103.12'
      },
      {
        id: 3,
        name: 'Yeoman Runner 2',
        description: 'Popular simple in use generator of js-projects.',
        price: '21,203.12'
      }
    ];
    var comments = [
      {
        id: 1,
        phoneId: 1,
        author: 'Alex',
        text: 'Amazing multipurpose phone'
      },
      {
        id: 2,
        phoneId: 1,
        author: 'Ian',
        text: 'I haven\'t ideas how to comment this phone'
      }
    ];

    var service = {
      getPhone: function( id ) {
        if ( angular.isDefined(phones[id-1]) ) {
          return phones[id-1];
        }
        return false;
      },
      getPhones: function() {
        return phones;
      },
      getComments: function( id ) {
        var result = [];
        for ( var comment in comments ) {
          if ( Number(comments[comment].phoneId) === Number(id) ) {
            result.push( comments[comment] );
          }
        }
        return result;
      },
      pushComment: function( comment ) {
        comment.id = comments.length + 1;
        comments.push( comment );
      },
      pushPhone: function( phone ) {
        phone.id = phones.length + 1;
        phones.push( phone );
      }
    };
    return service;
  });
