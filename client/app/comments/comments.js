'use strict';

angular.module('tolkienlibApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/books/:book_id/comments', {
        templateUrl: 'app/comments/comments.html',
        controller: 'CommentsCtrl'
      });
  });
