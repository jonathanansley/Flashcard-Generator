console.log('this is from ClozeCard.js\n');

// export constructor
module.exports = ClozeCard;

// constructor function
function ClozeCard(text, cloze) {
 	this.text = text;
 	console.log('this.text: ' + this.text);

 	// cloze-deleted portion of the text
 	this.cloze = cloze;
 	console.log('this.cloze: ' + this.cloze);

 	// the partial text
	this.partial = text.split(cloze);
	console.log('this.partial: ' + this.partial);

//   sentenceHalves.join('_________________');
//   var cardFront = sentenceHalves.join('_________________');;

	//   var sentenceHalves = 'President George Washington was the first president of the USA'.split('George Washington');
//   sentenceHalves.join('_________________');
//   var cardFront = sentenceHalves.join('_________________');

//   The constructor should throw or log an error when cloze
// deletion does _not_ appear in the input text.

//   * Use prototypes to attach these methods, wherever possible.

    // information about the object
  	this.printInfo = function() {
  	console.log("This is the printInfo function.");
   //  console.log("Text: " + this.text + "Cloze: " + this.cloze + "\nPartial: " + this.partial + "full text: " + this.fullText);
  	};

  	this.printInfo = function() {
    console.log("Text: " + this.text + "Cloze: " + this.cloze);
  	};

}; // end of ClozeCard function


var firstPresidentCloze = new ClozeCard(
     "George Washington was the first president of the United States.", "George Washington");

//"George Washington"
console.log('firstPresidentCloze.cloze: ' + firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log('firstPresidentCloze.partial' + firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log('firstPresidentCloze.text' + firstPresidentCloze.text)

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");







// cloze card
// inquirer.prompt([
//   {
//     name: "text",
//     message: "Enter a factual sentence: "
//   },

//   {
//     name: "cloze",
//     message: "What part of the sentence do you want to remove? "
//   }
// ]).then(function(answers) {
//   // initializes the variable which will take
//   // in the user's answers to the questions above
//   var clozeCard = new ClozeCard(answers.text, answers.cloze);

//   // printInfo method is run to show that the object was created and filled
//   clozeCard.printInfo();
// });