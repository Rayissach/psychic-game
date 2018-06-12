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

if (userGuess == computerGuess){
wins++

}
console.log(userGuess);
}


