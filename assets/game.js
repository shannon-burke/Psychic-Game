var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
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

    /*
    document.getElementById("#guesses-so-far").innerHTML = guessesSoFar;
    document.getElementById("#guesses-left").innerHTML = guessesLeft;
    



    var actualGuessesSoFar = document.getElementById("#guesses-so-far");
    actualGuessesSoFar.textContent = guessesSoFar;

    var actualGuessesLeft = document.getElementById("#guesses-left");
    actualGuessesLeft.textContent = guessesLeft;


    
    actualGuessesSoFar = document.getElementById("guesses-so-far");
    txt = document.createTextNode("your cool text");
    span.appendChild(txt);

    */

    //The console logs below are to test to make sure my actual function works. Which, at this point, it seems to be!!
    //inserting the HTML is still not working yet.
    console.log(wins);
    console.log(losses);
    console.log(guessesLeft);
    console.log(guessesSoFar);


    //I finally got something to work! I wanted to add spaces between the guesses so far, but couldn't get it to work. 
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("guesses-so-far").innerHTML = " " + guessesSoFar;


}