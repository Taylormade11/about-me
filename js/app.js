'use strict';

alert("Remember to answer all questions with yes/no only. Each correct answer will award 1 point. Each incorrect answer will result in 1 strike. 3 strikes and you lose!")

var pointsCounter = 0;
var strikesCounter = 0;
var remainingStrikes = 3;

var ageGuess = prompt("Do you think I am over the age of 20?").toLowerCase();

if (ageGuess === "yes") {
  alert("Correct! 1 point for you!");
  pointsCounter += 1;
} else {
  strikesCounter +=1;
  alert("Wrong! 1 strike for you! Only " + (remainingStrikes - strikesCounter) + " left!");
}
