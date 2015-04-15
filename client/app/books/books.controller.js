    'use strict';

    angular.module('tolkienlibApp')
      .controller('BooksCtrl', ['$scope','Book', 
           function($scope,Book) {
             Book.getBooks()
                .success(function(books) {
                   $scope.books = books
                   })


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
    }]);

angular.module('tolkienlibApp')
      .controller('BooksDetailCtrl', [
      '$scope', 
      'Book', 
      '$routeParams',
       function ($scope,Book ,$routeParams) {
        Book.getBook($routeParams.book_id)
        .success(function(book) {
             $scope.book = book;
        });
        $scope.addComment = function(){
            if($scope.comment.body === '') { return; }
            var comment = {
                body: $scope.comment.body,
                author: $scope.comment.author
            }
            Book.addBookComment($scope.book._id, comment )
                .success(function(added_comment) {
                    $scope.book.comments.push(added_comment)
                    $scope.comment = {} ;   
                })
    }
}])