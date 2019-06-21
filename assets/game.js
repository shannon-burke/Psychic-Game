var computerLetters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guessesSoFar = [];


document.onkeyup = function (event) {

    var userGuess = event.key;

    var computerChoice = computerLetters[Math.floor(Math.random() * computerLetters.length)];

    if (userGuess === computerChoice) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = [];
    }

    if (userGuess != computerChoice) {
        guessesLeft--;
        guessesSoFar.push(userGuess);
    }

    if (guessesLeft === 0) {
        guessesLeft = 9;
        losses++;
        guessesSoFar = [];
    }

    /* commenting out bc it's not working and trying something else.

     var actualGuessesSoFar = document.getElementById("guesses-so-far");
     actualGuessesSoFar.textContent = guessesSoFar;
 
     var actualGuessesLeft = document.getElementById("guesses-left");
     actualGuessesLeft.textContent = guessesLeft;
     
 This also doesn't work, ugh.
    document.getElementById("guesses-so-far").innerHTML = guessesSoFar;
    document.getElementById("guesses-left").innerHTML = guessesLeft;

    console.log(guessesLeft);

    */
}