// console.log('this is from BasicCard.js\n');

// export constructor
module.exports = BasicCard;

//constructor function for creating card objects
function BasicCard(front, back) {
  this.front = front;
  this.back = back;

  // information about the object
  // this.printInfo = function() {
  //   console.log("Front: " + this.front + "\nBack: " + this.back);
  // };
};

// flash card
// ?????? comment this back in - It works.
// inquirer.prompt([
//   {
//     name: "front",
//     message: "Enter a question for the front of the flash card: "
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
