'use strict';

angular.module('tolkienlibApp')
  .factory('Book', ['$http', function($http){
       var api = {
     getBooks : function() {
           return $http.get('/api/books')
     },
     addBook : function(book) {
          return $http.post('/api/books',book)
     },
     addBookComment : function(book_id, comment) {
          return $http.post('/api/books/' + book_id + '/comments' ,
                            comment)
     },
     upvoteBook : function(book_id, new_upvote_count ) {
          return $http.post('/api/books/' + book_id + '/upvotes', 
                     {upvotes: new_upvote_count })
     },
     upvoteBookComment : function(book_id, comment_id, new_upvote_count ) {
          return $http.post( '/api/books/' +
                      book_id + '/comments/' +  comment_id + '/upvotes', 
                     {upvotes: new_upvote_count })
     },
     getBook : function(book_id) {
        return $http.get('/api/books/' + book_id )
     }
  }
  return api
}])