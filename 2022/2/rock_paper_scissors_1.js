// https://adventofcode.com/2022/day/2

const fs = require('fs')
const values = {
    "A": "Rock",
    "X": "Rock",
    "B": "Paper",
    "Y": "Paper",
    "C": "Scissors",
    "Z": "Scissors",
};
let score = 0;

const data = fs.readFileSync('input.txt', 'UTF-8')
const lines = data.split(/\r?\n/)

lines.forEach(line => {
    game = line.split(" ");
    if (isWin(values[game[0]], values[game[1]])) {
        score += 6 + scoreValue(values[game[1]]);
    } else if (isDraw(values[game[0]], values[game[1]])) {
        score += 3 + scoreValue(values[game[1]]);
    } else {
        score += scoreValue(values[game[1]]);
    }
});

console.log(score);

function isWin(opponentValue, myValue) {
    if (myValue == "Rock" && opponentValue == "Scissors") return true;
    else if (myValue == "Paper" && opponentValue == "Rock") return true
    else if (myValue == "Scissors" && opponentValue == "Paper") return true
    return false;
}

function isDraw(opponentValue, myValue) {
    return opponentValue == myValue;
}

function scoreValue(value) {
    if (value == "Rock") return 1;
    else if (value == "Paper") return 2;
    else return 3
}
