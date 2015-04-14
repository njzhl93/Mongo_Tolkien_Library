'use strict';

angular.module('tolkienlibApp')
      .controller('CommentsCtrl', [
      '$scope', 
      'Book', 
      '$routeParams',
       function ($scope,Book ,$routeParams) {
        Book.getBook($routeParams.book_id)
        .success(function(book) {
             $scope.book = book;
        });

    $scope.incrementUpvotes = function(comment) {
       Book.upvoteBookComment($scope.book._id, comment._id , 
                comment.upvotes + 1 )
          .success(function(updated_comment) {
              comment.upvotes = updated_comment.upvotes
          })
    }
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