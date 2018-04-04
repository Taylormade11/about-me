'use strict';

// alert("Remember to answer all questions with yes/no only. Each correct answer will award 1 point. Each incorrect answer will result in 1 strike. 3 strikes and you lose!");

// var pointsCounter = 0;
// var strikesCounter = 0;
// var remainingStrikes = 3;

// // Do you think I am over the age of 20?
// var ageGuess = prompt("Do you think I am over the age of 20?").toLowerCase();

// if (ageGuess === "yes") {
//   pointsCounter += 1;
//   alert("Correct! I am 25 years old. 1 point for you! Good job!");
//   console.log("Correct! I am 25 years old.");
// } else {
//   strikesCounter +=1;
//   alert("Incorrect! I am 25 years old! 1 strike for you! Only " + (remainingStrikes - strikesCounter) + " left!");
//   console.log("Incorrect! I am 25 years old!");
// }


// // Do I have any children?

// var childrenGuess = prompt("Do I have any children?").toLowerCase();

// if (childrenGuess === "yes") {
//   pointsCounter += 1;
//   alert("Correct! I have a 7 year old son. 1 point for you. You have " + pointsCounter + " points, keep it up!");
//   console.log("Correct! I have a 7 year old son. Keep it up!");
// } else {
//   strikesCounter += 1;
//   alert("Incorrect! I have a 7 year old son. You weren't paying attention during our introductions were you? 1 strike for you! Only " + (remainingStrikes - strikesCounter) + " left!");
//   console.log("Incorrect! I have a 7 year old son!");
// }

// // Do you think I have any cats?

// var catsGuess = prompt("Do you think I have any cats?").toLowerCase();

// if (catsGuess === "no") {
//   pointsCounter += 1;
//   alert("Correct! I hate cats! 1 point for you! You have " + pointsCounter + " points, you're doing great!");
//   console.log("Correct! I hate cats!");
// } else {
//   strikesCounter += 1;
//   alert("Incorrect! I hate cats! 1 strike for you! Only " + (remainingStrikes - strikesCounter) + " left!");
//   console.log("Incorrect! I hate cats and would never own one!");
// }

// // Error catch for possible loss? Not sure how to do this in a better way.

// if (strikesCounter >= 3) {
//   alert(strikesCounter + " strikes, you lose! Let's finish the rest of the 5 questions just for fun anyways, so I can get credit for all 5 questions ;P ");
// } 

// // Do you think I have lived in Seattle before?

// var seattleGuess = prompt("Do you think I have lived in Seattle before?").toLowerCase();

// if (seattleGuess === "yes") {
//   pointsCounter += 1;
//   alert("Correct! I lived here about 2 years ago. 1 point for you! You have " + pointsCounter + " points, I just can't fool you!");
//   console.log("Correct! I lived here about 2 years ago and am just moving back!");
// } else if (strikesCounter < 3) {
//   strikesCounter += 1;
//   alert("Incorrect! I lived here about 2 years ago. 1 strike for you! Only " + (remainingStrikes - strikesCounter) + " left!");
//   console.log("Incorrect! I lived here about 2 years ago and am just moving back!");
// } else {
//   strikesCounter += 1;
//   alert("Incorrect! I lived here about 2 years ago. 1 strike for you! You can do better than that! You'll get the last one for sure!");
//   console.log("Incorrect! I lived here about 2 years ago and am just moving back!");
// }

// // Error catch for possible loss? Not sure how to do this in a better way.

// if (strikesCounter >= 3) {
//   alert(strikesCounter + " strikes, you lose! Let's finish the rest of the 5 questions just for fun anyways so I can get credit for all 5 questions ;P ");
// } 

// // Do you think I eat a banana every day?

// var bananaGuess = prompt("Do you think I eat a banana every day?").toLowerCase();

// if (bananaGuess === "no") {
//   pointsCounter += 1;
//   alert("Correct! I can't eat a banana without yacking! I drink 1 every day though! 1 point for you! You have " + pointsCounter + " points, you did awesome!");
//   console.log("Correct! I can't eat a banana without yacking! I drink 1 every day though!");
// } else if (strikesCounter < 3) {
//   strikesCounter += 1;
//   alert("Incorrect! I can't eat a banana, the texture makes me yack! I drinnk one every day though! 1 strike for you! Only " + (remainingStrikes - strikesCounter) + " left!");
//   console.log("Incorrect! I can't eat a banana, the texture makes me yack! I drink one every day though!");
// } else {
//   strikesCounter += 1;
//   alert("Incorrect! I can't eat a banana, the texture makes me yack! I drink one every day though! 1 strike for you! You got " + strikesCounter + " strikes! Sorry, maybe next time!");
//   console.log("Incorrect! I can't eat a banana, the texture makes me yack! I drink one every day though!");
// }

// if (strikesCounter > pointsCounter) {
//   alert("You lose! Maybe next time you'll get me though!");
//   console.log("You lose! Maybe next time you'll get me though!");
// } else {
//   alert("Great job! You win! You just know me too well. Looks like I can't fool you, next time I'll try to think of some tougher questions!");
//   console.log("Great job! You win! You just know me too well. Looks like I can't fool you, next time I'll try to think of some tougher questions!");
// }