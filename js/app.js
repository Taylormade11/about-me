'use strict';



// Ask user their name and personalize the game
var userName = '';
userName = prompt('Thanks for visiting! My name is Taylor, what is your name?');

alert('Hello ' + userName + '! Please answer the first 5 questions with yes/no only. There are a total of 7 questions. Each correct answer will award 1 point. Each incorrect answer to a question will result in 1 strike. 3 strikes and you lose! Let\'s see how many points you can get!');

var pointsCounter = 0;
var strikesCounter = 0;
var remainingStrikes = 3;
var randomNumb = Math.floor((Math.random() * 10) + 1);
console.log(randomNumb);
var numberOfUserNumberGuess = 0;


// Question #1 - Do you think I am over the age of 20?
var ageGuess = prompt('Do you think I am over the age of 20?').toLowerCase();

if (ageGuess === 'yes') {
  pointsCounter += 1;
  alert('Correct! I am 25 years old. 1 point for you! Good job!');
  console.log('Correct! I am 25 years old.');
} else {
  strikesCounter += 1;
  alert('Incorrect! I am 25 years old! ' + strikesCounter + ' strike(s) for you! Only ' + (remainingStrikes - strikesCounter) + ' left!');
  console.log('Incorrect! I am 25 years old!');
}

// Question #2 - Do I have any children?

var childrenGuess = prompt('Do I have any children?').toLowerCase();

if (childrenGuess === 'yes') {
  pointsCounter += 1;
  alert('Correct! I have a 7 year old son. 1 point for you. You have ' + pointsCounter + ' points, keep it up!');
  console.log('Correct! I have a 7 year old son. Keep it up!');
} else {
  strikesCounter += 1;
  alert('Incorrect! I have a 7 year old son. You weren\'t paying attention during our introductions were you? ' + strikesCounter + ' strike(s) for you! Only ' + (remainingStrikes - strikesCounter) + ' left!');
  console.log('Incorrect! I have a 7 year old son!');
}

// Question #3 - Do you think I have any cats?

var catsGuess = prompt('Do you think I have any cats?').toLowerCase();

if (catsGuess === 'no') {
  pointsCounter += 1;
  alert('Correct! I hate cats! 1 point for you! You have ' + pointsCounter + ' points, you\'re doing great!');
  console.log('Correct! I hate cats!');
} else {
  strikesCounter += 1;
  alert('Incorrect! I hate cats! ' + strikesCounter + ' strike(s) for you! Only ' + (remainingStrikes - strikesCounter) + 'left!');
  console.log('Incorrect! I hate cats and would never own one!');
}

// Error catch for possible loss? Not sure how to do this in a better way.

if (strikesCounter >= 3) {
  alert(strikesCounter + ' strikes, you lose! Let\'s finish the rest of the questions just for fun anyways.');
}

// Question #4 - Do you think I have lived in Seattle before?

var seattleGuess = prompt('Do you think I have lived in Seattle before?').toLowerCase();

if (seattleGuess === 'yes') {
  pointsCounter += 1;
  alert('Correct! I lived here about 2 years ago. 1 point for you! You have ' + pointsCounter + ' points, I just can\'t fool you!');
  console.log('Correct! I lived here about 2 years ago and am just moving back!');
} else if (strikesCounter < 3) {
  strikesCounter += 1;
  alert('Incorrect! I lived here about 2 years ago. ' + strikesCounter + ' strike(s) for you! Only ' + (remainingStrikes - strikesCounter) + ' left!');
  console.log('Incorrect! I lived here about 2 years ago and am just moving back!');
} else {
  strikesCounter += 1;
  alert('Incorrect! I lived here about 2 years ago. ' + strikesCounter + ' strike(s) for you! You can do better than that! You\'ll get the last one for sure!');
  console.log('Incorrect! I lived here about 2 years ago and am just moving back!');
}

// Error catch for possible loss? Not sure how to do this in a better way.

if (strikesCounter >= 3) {
  alert(strikesCounter + ' strikes, you lose! Let\'s finish the rest of the questions just for fun anyways.');
}

// Question #5 - Do you think I eat a banana every day?

var bananaGuess = prompt('Do you think I eat a banana every day?').toLowerCase();

if (bananaGuess === 'no') {
  pointsCounter += 1;
  alert('Correct! I can\'t eat a banana without yacking! I drink 1 every day though! 1 point for you! You have ' + pointsCounter + ' points, you\'re doing amazing!');
  console.log('Correct! I can\'t eat a banana without yacking! I drink 1 every day though!');
} else {
  strikesCounter += 1;
  alert('Incorrect! I can\'t eat a banana, the texture makes me yack! I drink one every day though! ' + strikesCounter + ' strike(s) for you! Only ' + (remainingStrikes - strikesCounter) + ' left!');
  console.log('Incorrect! I can\'t eat a banana, the texture makes me yack! I drink one every day though!');
}

// Error catch for possible loss? Not sure how to do this in a better way.

if (strikesCounter >= 3) {
  alert(strikesCounter + ' strikes, you lose! Let\'s finish the rest of the questions just for fun anyways. ');
}


// Question #6 - Random number guessing game
for (var i=0; i < 4; i ++) {
  var userNumberGuess = parseInt(prompt('Guess a number between 1 & 10!'));
  if (userNumberGuess === randomNumb) {
    alert('Correct! You nailed it! Great job, 1 more point for you!');
    pointsCounter ++;
    console.log('Correct, you guessed the random number!');
    break;
  } else if (userNumberGuess < randomNumb) {
    numberOfUserNumberGuess ++;
    alert('Higher! Try again!');
    console.log('Guess a higher number!');
  } else if (userNumberGuess > randomNumb) {
    numberOfUserNumberGuess ++;
    alert('Lower! Try again!');
    console.log('Guess a lower number!');
  } else if (numberOfUserNumberGuess >= 4) {
    alert('Sorry you\'re all out of guesses! 1 strike for you. Maybe next time!');
    strikesCounter ++;
    console.log('Sorry you didn\'t guess the right number. You\'re out of guesses!');
  }
}



// Error catch for possible loss? Not sure how to do this in a better way.

if (strikesCounter >= 3) {
  alert(strikesCounter + ' strikes, you lose! Let\'s finish the rest of the questions just for fun anyways. ');
}

// Question #7 - Multiple choice question with an array of answers. User gets 6 guesses, use a counter to keep track of guesses. If they don't get it after 6 guesses, display message with a list of possible correct answers.

var favoriteTvShows = ['star trek', 'black mirror', 'a series of unfortunate events', 'the office', 'disjointed', 'parks and recreation'];

var showGuesses = 0;

for (i = 0; i < favoriteTvShows.length; i ++) {
  var tvShowGuess = prompt('Can you guess one of my favorite TV shows?');
  if (favoriteTvShows.includes(tvShowGuess)) {
    alert('Wow! How\'d you know?! You\'re reading my mind!');
    pointsCounter ++;
    console.log('You guessed one of my favorite TV shows, good job!');
    break;
  } else if (showGuesses >= 5) {
    alert('Sorry, you\'re out of guesses! My favorite TV shows are ' + favoriteTvShows);
    strikesCounter ++;
    console.log('Sorry you\'re out of guesses. You didn\'t guess one of my favorite TV shows.');
    break;
  }else {
    alert('Guess again!');
    showGuesses ++;
    console.log('Guess again!');
  }
}

// Error catch for possible loss? Not sure how to do this in a better way.

if (strikesCounter >= 3) {
  alert(strikesCounter + ' strikes, you lose! Let\'s finish the rest of the questions just for fun anyways. ');
}

console.log(strikesCounter + 'strikes./3');
console.log(pointsCounter + 'points./7');

alert('Great job ' + userName + '! You got ' + pointsCounter + 'points and ' + strikesCounter + ' strikes! You did great!');
console.log('Great job ' + userName + '! You got ' + pointsCounter + 'points and ' + strikesCounter + ' strikes! You did great!');