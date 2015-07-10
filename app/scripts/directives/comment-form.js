'use strict';

/**
 * @ngdoc directive
 * @name phonesStoreApp.filter:commentForm
 * @description
 * # commentForm
 */
angular.module('phonesStoreApp')
  .directive('commentForm', function ( apiService ) {
    return {
      templateUrl: 'views/comment-form.html',
      restrict: 'E',
      replace: true,
      scope: {
        phoneId: '='
      },
      link: function( scope ) {
        scope.addComment = function() {
          if ( scope.author && scope.comment ) {
            var comment = {
              phoneId: scope.phoneId,
              author: scope.author,
              text: scope.comment
            };

            apiService.pushComment( comment).then( function( result ) {
              scope.$parent.comments = result;
            });
          }
        };
      }
    };
  });
