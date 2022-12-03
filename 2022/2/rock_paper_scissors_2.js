// https://adventofcode.com/2022/day/2

const fs = require('fs')
const values = {
    "A": "Rock",
    "B": "Paper",
    "C": "Scissors",
};
let score = 0;

const data = fs.readFileSync('input.txt', 'UTF-8')
const lines = data.split(/\r?\n/)

lines.forEach(line => {
    game = line.split(" ");
    if (isWin(game[1])) {
        score += 6 + scoreValue(selectMoveToWin(values[game[0]]));
    } else if (isDraw(game[1])) {
        score += 3 + scoreValue(values[game[0]]);
    } else {
        score += scoreValue(selectMoveToLose(values[game[0]]));
    }
});

console.log(score);

function isWin(value) {
    return value == "Z"
}

function isDraw(value) {
    return value == "Y";
}

function scoreValue(value) {
    if (value == "Rock") return 1;
    else if (value == "Paper") return 2;
    else return 3
}

function selectMoveToWin(move) {
    if (move == "Rock") return "Paper";
    else if (move == "Paper") return "Scissors";
    else return "Rock"
}

function selectMoveToLose(move) {
    if (move == "Rock") return "Scissors";
    else if (move == "Paper") return "Rock";
    else return "Paper"
}
