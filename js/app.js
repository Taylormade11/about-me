'use strict';

alert("Remember to answer all questions with yes/no only. Each correct answer will award 1 point. Each incorrect answer will result in 1 strike. 3 strikes and you lose!")

var pointsCounter = 0;
var strikesCounter = 0;
var remainingStrikes = 3;

// Do you think I am over the age of 20?
var ageGuess = prompt("Do you think I am over the age of 20?").toLowerCase();

if (ageGuess === "yes") {
  pointsCounter += 1;
  alert("Correct! 1 point for you!");
} else {
  strikesCounter +=1;
  alert("Wrong! 1 strike for you! Only " + (remainingStrikes - strikesCounter) + " left!");
}


// Do I have any children?

var childrenGuess = prompt("Do I have any children?").toLowerCase();

if (childrenGuess === "yes") {
  pointsCounter += 1;
  alert("Correct! 1 point for you! You have " + pointsCounter + " points, keep it up!")
} else {
  strikesCounter += 1;
  alert("Wrong! 1 strike for you! Only " + (remainingStrikes - strikesCounter) + " left!");
}

// Do you think I have any cats?

var catsGuess = prompt("Do you think I have any cats?").toLowerCase();

if (catsGuess === "no") {
  pointsCounter += 1;
  alert("Correct! 1 point for you! You have " + pointsCounter + " points, keep it up!")
} else {
  strikesCounter += 1;
  alert("Wrong! 1 strike for you! Only " + (remainingStrikes - strikesCounter) + " left!");
}

// Error catch for possible loss? Not sure how to do this in a better way.

if (strikesCounter >= 3) {
  alert(strikesCounter + " strikes, you lose! Let's finish the rest of the 5 questions just for fun anyways :) ")
} 

// Do you think I have lived in Seattle before?

var seattleGuess = prompt("Do you think I have lived in Seattle before?").toLowerCase();

if (seattleGuess === "yes") {
  pointsCounter += 1;
  alert("Correct! 1 point for you! You have " + pointsCounter + " points, keep it up!")
} else {
  strikesCounter += 1;
  alert("Wrong! 1 strike for you! Only " + (remainingStrikes - strikesCounter) + " left!");
}

// Error catch for possible loss? Not sure how to do this in a better way.

if (strikesCounter >= 3) {
  alert(strikesCounter + " strikes, you lose! Let's finish the rest of the 5 questions just for fun anyways :) ")
} 


// Do you think I eat a banana every day?

var bananaGuess = prompt("Do you think I eat a banana every day?").toLowerCase();

if (bananaGuess === "no") {
  pointsCounter += 1;
  alert("Correct! I can't eat a banana without yacking! I drink 1 every day! 1 point for you! You have " + pointsCounter + " points, keep it up!")
} else {
  strikesCounter += 1;
  alert("Wrong! 1 strike for you! Only " + (remainingStrikes - strikesCounter) + " left!");
}

if (strikesCounter > pointsCounter) {
  alert("You lose! Maybe next time!")
} else {
  alert("Great job! You know me too well! I just can't fool you, next time I'll try to think of some tougher questions!")
}