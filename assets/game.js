var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


document.onkeyup = function (event) {

    var userGuess = event.key;

    var computerChoice = computerLetters[Math.floor(Math.random() * computerLetters.length)];

    function resetGame() {
        guessesLeft = 9;
        guessesSoFar = [];
    }

    if (userGuess === computerChoice) {
        guessesSoFar.push(userGuess);
        wins++;
        resetGame();
    }

    if (userGuess != computerChoice) {
        if (guessesSoFar.includes(userGuess)) {
            return;
        }
        else {
            guessesLeft--;
            guessesSoFar.push(userGuess);
        }
    }

    if (guessesLeft === 0) {
        guessesSoFar.push(userGuess);
        losses++;
        resetGame();
    }

    $("#wins").empty().append(" " + wins);
    $("#losses").empty().append(" " + losses);
    $("#guesses-left").empty().append(" " + guessesLeft);
    // $("#guesses-so-far").empty().append(guessesSoFar);
    $("#g1").empty().append(guessesSoFar[0]);
    $("#g2").empty().append(guessesSoFar[1]);
    $("#g3").empty().append(guessesSoFar[2]);
    $("#g4").empty().append(guessesSoFar[3]);
    $("#g5").empty().append(guessesSoFar[4]);
    $("#g6").empty().append(guessesSoFar[5]);
    $("#g7").empty().append(guessesSoFar[6]);
    $("#g8").empty().append(guessesSoFar[7]);
    $("#g9").empty().append(guessesSoFar[8]);


    // document.getElementById("wins").innerHTML = wins;
    // document.getElementById("losses").innerHTML = losses;
    // document.getElementById("guesses-left").innerHTML = guessesLeft;
    // document.getElementById("guesses-so-far").innerHTML = guessesSoFar;


}