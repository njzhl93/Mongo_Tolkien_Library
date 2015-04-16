'use strict';

var _ = require('lodash');
var Film = require('./film.model');

function handleError(res, err) {
return res.send(500, err);
    }
// Get list of films
exports.index = function(req, res) {
  Film.find(function (err, films) {
    if(err) { return handleError(res, err); }
    return res.json(200, films);
  });
};

// Get a single film
exports.show = function(req, res) {
  Film.findById(req.params.id, function (err, film) {
            if(err) { return handleError(res, err); }
            return res.json(200, film);

        });
    } ;

  exports.update_upvotes = function(req, res) {
     Film.findById(req.params.id, function (err, film) {
          film.upvotes = req.body.upvotes
          film.save(function (err) {
              if(err) { return handleError(res, err); }
              return res.json(200, film);
          });
      });
  };

    exports.add_comment = function(req, res) {
     Film.findById(req.params.id, function (err, film) {
            var comment = {
                body: req.body.body,
                author: req.body.author ,
                upvotes: 0
             }
            film.comments.push(comment)
            film.save(function (err) {
              if(err) { return handleError(res, err); }
              var last = _.last(film.comments)
              if (last != undefined) {
                 return res.json(200, last);
              } else {
                return res.send(500,"Database error")
                 }
            });
      });
  };

  exports.update_comment_upvotes = function(req, res) {
    Film.findById(req.params.film_id, function (err, film) {
        var comment_index = _.findIndex(film.comments , 
           function(comment) {
              return comment._id == req.params.comment_id;
          }); 
       if (comment_index != -1) {
          film.comments[comment_index].upvotes = req.body.upvotes
          film.save(function (err) {
              if(err) { return handleError(res, err); }
              return res.json(200,film.comments[comment_index])
            });
        } else {
          return res.send(401,"Bad comment id")
        }

     })
  }

// Creates a new film in the DB.
exports.create = function(req, res) {
  req.body.comments = []
  req.body.upvotes = 0 
  Film.create(req.body, function(err, film) {
    if(err) { return handleError(res, err); }
    return res.json(201, film);
  });
};

// Updates an existing film in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Film.findById(req.params.id, function (err, film) {
    if (err) { return handleError(res, err); }
    if(!film) { return res.send(404); }
    var updated = _.merge(film, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, film);
    });
  });
};

// Deletes a film from the DB.
exports.destroy = function(req, res) {
  Film.findById(req.params.id, function (err, film) {
    if(err) { return handleError(res, err); }
    if(!film) { return res.send(404); }
    film.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}