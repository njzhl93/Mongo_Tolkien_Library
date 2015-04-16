'use strict';

angular.module('tolkienlibApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/films', {
        templateUrl: 'app/films/films.html',
        controller: 'FilmsCtrl'
      })
      .when('/films/:film_id/detail', {
        templateUrl: 'app/films/film_detail.html',
        controller: 'FilmsDetailCtrl'
      })
      .when('/newfilm', {
        templateUrl: 'app/films/film_new.html',
        controller: 'FilmsCtrl'
      });
  });