// https://adventofcode.com/2022/day/5

const fs = require('fs')

const data = fs.readFileSync('input.txt', 'UTF-8')
const lines = data.split(/\r?\n/)

let table = [];
const numberOfStacks = Math.ceil(lines[0].length / 4);
for (let index = 0; index < numberOfStacks; index++) {
    table[index] = []
    
}

lines.forEach(line => {
    if (line.includes('move')) {
        let move = line.split(" ");
        for (let numOfCrates = 0; numOfCrates < move[1]; numOfCrates++) {
            table[move[5] - 1].unshift(table[move[3] - 1][0]);
            table[move[3] - 1].shift();
        }
    } else if (line.includes('[') || line.length == 0) {
        for (let position = 0; position < line.length; position++) {
            if (line[position] == '[') {
                if (position == 0) {
                    table[0].push(line[position + 1]);
                } else {
                    table[position / 4].push(line[position + 1]);
                }
            }
        }
    }
});

let result = '';
table.forEach(element => {
    result += element[0];
});

console.log(result)