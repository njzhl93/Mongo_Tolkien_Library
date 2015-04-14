'use strict';

var _ = require('lodash');
var Book = require('./book.model');

function handleError(res, err) {
return res.send(500, err);
    }
// Get list of books
exports.index = function(req, res) {
  Book.find(function (err, books) {
    if(err) { return handleError(res, err); }
    return res.json(200, books);
  });
};

// Get a single book
exports.show = function(req, res) {
  Book.findById(req.params.id, function (err, book) {
            if(err) { return handleError(res, err); }
            return res.json(200, book);

        });
    } ;

  exports.update_upvotes = function(req, res) {
     Book.findById(req.params.id, function (err, book) {
          book.upvotes = req.body.upvotes
          book.save(function (err) {
              if(err) { return handleError(res, err); }
              return res.json(200, book);
          });
      });
  };

    exports.add_comment = function(req, res) {
     Book.findById(req.params.id, function (err, book) {
            var comment = {
                body: req.body.body,
                author: req.body.author ,
                upvotes: 0
             }
            book.comments.push(comment)
            book.save(function (err) {
              if(err) { return handleError(res, err); }
              var last = _.last(book.comments)
              if (last != undefined) {
                 return res.json(200, last);
              } else {
                return res.send(500,"Database error")
                 }
            });
      });
  };

  exports.update_comment_upvotes = function(req, res) {
    Book.findById(req.params.book_id, function (err, book) {
        var comment_index = _.findIndex(book.comments , 
           function(comment) {
              return comment._id == req.params.comment_id;
          }); 
       if (comment_index != -1) {
          book.comments[comment_index].upvotes = req.body.upvotes
          book.save(function (err) {
              if(err) { return handleError(res, err); }
              return res.json(200,book.comments[comment_index])
            });
        } else {
          return res.send(401,"Bad comment id")
        }

     })
  }

// Creates a new book in the DB.
exports.create = function(req, res) {
  req.body.comments = []
  req.body.upvotes = 0 
  Book.create(req.body, function(err, book) {
    if(err) { return handleError(res, err); }
    return res.json(201, book);
  });
};

// Updates an existing book in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Book.findById(req.params.id, function (err, book) {
    if (err) { return handleError(res, err); }
    if(!book) { return res.send(404); }
    var updated = _.merge(book, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, book);
    });
  });
};

// Deletes a book from the DB.
exports.destroy = function(req, res) {
  Book.findById(req.params.id, function (err, book) {
    if(err) { return handleError(res, err); }
    if(!book) { return res.send(404); }
    book.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}