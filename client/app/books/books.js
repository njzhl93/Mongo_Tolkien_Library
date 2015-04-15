'use strict';

angular.module('tolkienlibApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/books', {
        templateUrl: 'app/books/books.html',
        controller: 'BooksCtrl'
      })
      .when('/books/:book_id/detail', {
        templateUrl: 'app/books/book_detail.html',
        controller: 'BooksDetailCtrl'
      })
      .when('/newbook', {
        templateUrl: 'app/books/book_new.html',
        controller: 'BooksCtrl'
      });
  });
