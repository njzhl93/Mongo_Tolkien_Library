'use strict';

angular.module('tolkienlibApp')
  .factory('Film', ['$http', function($http){
       var api = {
     getFilms : function() {
           return $http.get('/api/films')
     },
     addFilm : function(film) {
          return $http.post('/api/films',film)
     },
     addFilmComment : function(film_id, comment) {
          return $http.post('/api/films/' + film_id + '/comments' ,
                            comment)
     },
     upvoteFilm : function(film_id, new_upvote_count ) {
          return $http.post('/api/films/' + film_id + '/upvotes', 
                     {upvotes: new_upvote_count })
     },
     upvoteFilmComment : function(film_id, comment_id, new_upvote_count ) {
          return $http.post( '/api/films/' +
                      film_id + '/comments/' +  comment_id + '/upvotes', 
                     {upvotes: new_upvote_count })
     },
     getFilm : function(film_id) {
        return $http.get('/api/films/' + film_id )
     }
  }
  return api
}])
