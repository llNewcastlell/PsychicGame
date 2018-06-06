var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Reset Game

function newgame(){

    guessedLetters.length = 0;
    document.querySelector("#guessedsofar").innerHTML ="Letters picked so far: " + "";
    document.querySelector("#loser").innerHTML ="Losses: " + losses;
    
    
}

//This function is ran whenever the user presses a key.

document.onkeyup = function () {

    var userguess = String.fromCharCode(event.keyCode).toLowerCase();

    // console.log(userguess);


    var computerguess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerguess);

    // Compare guesses against one another.


    if (userguess === computerChoices) {
        wins++;
        guessesLeft--;

    }
    if (userguess !== computerChoices) {
        losses++;
        guessesLeft--;
        
    }

    if(losses > 10){
        alert("You lose Sucker!")
        newgame();
    }
    
    guessedLetters.push(userguess)
    //Display results to the browser

    var winner =
        "Wins: " + wins;

    var loser =
        "Losses: " + losses;

    var whatsLeft =
        "Guesses Left: " + guessesLeft;

    var userguess2 = 
        "Letters picked so far: " + userguess;

   

    document.querySelector("#winner").innerHTML = winner;

    document.querySelector("#loser").innerHTML = loser;

    document.querySelector("#guesser").innerHTML = whatsLeft;

    document.querySelector("#guessedsofar").innerHTML ="Letters picked so far: " + guessedLetters;

    


}

