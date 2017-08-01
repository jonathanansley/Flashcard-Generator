// console.log('this is from main.js\n');

// dependency for inquirer npm package
const inquirer = require("inquirer");

// require module exported from other .js files
const BasicCard = require("./BasicCard.js");
const ClozeCard = require("./ClozeCard.js");

// creating and storing a new basic card object
//var testCard = new BasicCard('What is the capital of Arkansas?', 'Little Rock');

// test card
// console.log(testCard.front); 
// console.log(testCard.back); 

// Your constructors should work as follows.
// var firstPresident = new BasicCard(
//      "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
// console.log(firstPresident.front); 
// console.log(firstPresident.back); 

// menu
// inquirer.prompt([
//   {
//     name: "choice",
//     message: "What kind of card would you like to work with?"
//   },

//   {
//     name: "back",
//     message: "Enter an answer for the back of the flash card: "
//   }
// ]).then(function(answers) {
//   // initializes the variable which will take
//   // in the user's answers to the questions above
//   var flashCard = new BasicCard(answers.front, answers.back);

//   // printInfo method is run to show that the object was created and filled
//   flashCard.printInfo();
// });
