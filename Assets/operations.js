var lettersGuessed = [];  //User guesses
var totalChances = 12;  //Total wrong guesses possible
var wins = 0;  //Times won
var losses = 0; //tTmes lost
var possibleWords = ["space", "mattel", "atari", "arcade", "explosion", "pewpew"]; //Word list
var answer = possibleWords [Math.floor(Math.random() * possibleWords.length)];  //Getting word from word list
var dashedWord = []; //Dashes version of random word
var dashedIndex;  //Index of random word for dashedWord

for (var i = 0; i < answer.length; i++) {
    dashedWord[i] = "_";
}

document.onkeydown = function(event) {

    userGuess = event.key;

    lettersGuessed.push(userGuess);

    var indicies = [];
    var idx = answer.indexOf(userGuess);
    while (idx != -1) {
        indicies.push(idx);
        if (indicies === "") {
            losses++;
        }
        idx = answer.indexOf(userGuess, idx + 1);
        for (var i = 0; i < indicies.length; i++){
            dashedWord[indicies] = userGuess;
        }
    }

    if (totalChances == 0) {
        losses++;
        alert("DESTRUCTION!!");
    }

    var wtg = document.getElementById("wtg");
    var letters = document.getElementById("letters");
    var lives = document.getElementById("lives");
    var win = document.getElementById("win");
    var loss = document.getElementById("loss");
    wtg.textContent = dashedWord;
    letters.textContent = lettersGuessed;
    lives.textContent = totalChances;
    win.textContent = wins;
    loss.textContent = losses;
    
}