'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  link: { type: String, optional: true },
  date: Number,
  writer: String,
  publisher: String,
  imageUrl: String,				
  comments: [CommentSchema],
  upvotes: Number
});

var CommentSchema = new Schema({
    body: { type: String, required: true },
    author: { type: String, required: true },
    upvotes: Number
});

module.exports = mongoose.model('Book', BookSchema);