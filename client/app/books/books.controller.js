    'use strict';

    angular.module('tolkienlibApp')
      .controller('BooksCtrl', ['$scope','Book', 
           function($scope,Book) {
             Book.getBooks()
                .success(function(books) {
                   $scope.books = books
                   })

             $scope.setImage = function(img) {
                  $scope.img = img
               }
            $scope.incrementUpvotes = function(book) {
       Book.upvoteBook(book._id, book.upvotes + 1 )
          .success(function(updated_book) {
              book.upvotes = updated_book.upvotes
          })
    }
    $scope.bookDelete = function(book) {
        Book.delete('/api/books/' + books._id)
        .success(function() {
                $scope.books.splice()
         })}
       $scope.addBook = function(){
        var book = {
            name: $scope.newBook.name,
            description: $scope.newBook.description,
            link: $scope.newBook.link,
            writer: $scope.newBook.writer,
            publisher: $scope.newBook.publisher,
            date: $scope.newBook.date,
            imageUrl: $scope.newBook.imageUrl
            }
       Book.addBook(book)
          .success(function(added_book) {
             $scope.books.push(added_book);
             $scope.newBook = { }
          })
          $location.path("/books");
    }
    }])

