// require module exported from other .js files
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

// creating and storing a new classroom object
// var firstClass = new Classroom("Ahmed", 3187);

// calling the addStudent method on our firstClass object
// firstClass.addStudent("Jacob", "Coding", 3.87);

// console.log(firstClass);

console.log('this is from main.js');





//   var sentenceHalves = 'President George Washington was the first president of the USA'.split('George Washington');

//   sentenceHalves.join('_________________');

//   var cardFront = sentenceHalves.join('_________________');



// Your constructors should work as follows.

// ```
// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); "

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText): "

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");