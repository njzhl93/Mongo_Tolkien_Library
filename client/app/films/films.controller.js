    'use strict';

    angular.module('tolkienlibApp')
      .controller('FilmsCtrl', ['$scope','Film', 
           function($scope,Film) {
             Film.getFilms()
                .success(function(films) {
                   $scope.films = films
                   })


            $scope.incrementUpvotes = function(film) {
       Film.upvoteFilm(film._id, film.upvotes + 1 )
          .success(function(updated_film) {
              film.upvotes = updated_film.upvotes
          })
    }
    $scope.filmDelete = function(index) {
        Film.delete('/api/films/' + films._id)
        .success(function() {
                $scope.films.splice(index, 1);
         })}
       $scope.addFilm = function(){
        var film = {
            name: $scope.newFilm.name,
            description: $scope.newFilm.description,
            link: $scope.newFilm.link,
            writer: $scope.newFilm.writer,
            publisher: $scope.newFilm.publisher,
            date: $scope.newFilm.date,
            imageUrl: $scope.newFilm.imageUrl
            }
       Film.addFilm(film)
          .success(function(added_film) {
             $scope.films.push(added_film);
             $scope.newFilm = { }
          })
          $location.path("/films");
    }
    }]);

angular.module('tolkienlibApp')
      .controller('FilmsDetailCtrl', [
      '$scope', 
      'Film', 
      '$routeParams',
       function ($scope,Film ,$routeParams) {
        Film.getFilm($routeParams.film_id)
        .success(function(film) {
             $scope.film = film;
        });
        $scope.addComment = function(){
            if($scope.comment.body === '') { return; }
            var comment = {
                body: $scope.comment.body,
                author: $scope.comment.author
            }
            Film.addFilmComment($scope.film._id, comment )
                .success(function(added_comment) {
                    $scope.film.comments.push(added_comment)
                    $scope.comment = {} ;   
                })
    }
    $scope.incrementUpvotes = function(comment) {
       Film.upvoteFilmComment($scope.film._id, comment._id , 
                comment.upvotes + 1 )
          .success(function(updated_comment) {
              comment.upvotes = updated_comment.upvotes
          })
    }
}])