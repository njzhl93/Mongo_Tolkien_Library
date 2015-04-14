/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Book = require('../api/book/book.model');


Book.find({}).remove(function() {
  Book.create({
  
  description: "Sauron, the Dark Lord, has gathered to him all the Rings of Power – the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring – the ring that rules them all – which has fallen into the hands of the hobbit, Bilbo Baggins."
,
  name: "The Fellowship of the Ring",
  
  link: "http://www.amazon.co.uk/Fellowship-Ring-Lord-Rings-Part/dp/0007488319/ref=sr_1_4?s=books&ie=UTF8&qid=1425243560&sr=1-4&keywords=lord+of+the+rings",

  date: "2012",

  writer: "J. R. R Tolkien",

  publisher: "HarperCollins",
    
  comments: [],
    
  
  imageUrl: "assets/images/books/The-Fellowship-of-the-Ring.png",
  

  upvotes: 0
  
  
  },
  {
  
  "description": "Frodo and the Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in the battle with an evil spirit in the Mines of Moria; and at the Falls of Rauros, Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape the rest of the company were attacked by Orcs."
,
  "name": "The Two Towers",
  
  "link": "http://www.amazon.co.uk/Two-Towers-Lord-Rings-Part/dp/0007488335/ref=sr_1_8?s=books&ie=UTF8&qid=1425243560&sr=1-8&keywords=lord+of+the+rings",

  "date": "2012",

  "writer": "J. R. R Tolkien",

  "publisher": "HarperCollins",
    
  "comments": [],
    
  
  "imageUrl": "assets/images/books/The-Two-Towers.png",
  
  "id": "The-Two-Towers",
  
  upvotes: 0
});
});