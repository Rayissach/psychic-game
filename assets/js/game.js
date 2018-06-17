var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function(event) {
//takes in the users guess
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//random letter is selected by computer
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// users  guess is pushed to gusses so far
guessesSoFar.push(userGuess);

//if the users guess matches the computers. Increment wins by 1
if (userGuess == computerGuess){
wins++;
//guesses left reset back to 9 if user wins
guessesLeft = 9; 
//the guesses are emptied from the array
guessesSoFar.length = 0;
} else if (guessesLeft == 0){
losses++;
//guesses left reset back to 9 if user losses
guessesLeft = 9;
guessesSoFar.length = 0;
} else if (userGuess != computerGuess){
guessesLeft--;
}

var html = 
"<h1>The Psychic Game</h1>" + 
"<p>Guess what letter I'm thinking of!</p>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left: " + guessesLeft + "</p>" +
"<p>Your Guesses so far: " + guessesSoFar + "</p>"

document.querySelector('.game').innerHTML = html;

var parentDom = document.getElementsById("ptag5");
console.log(parentDom)
}


