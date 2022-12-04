// https://adventofcode.com/2022/day/3

const fs = require('fs')
let sum = 0;

const data = fs.readFileSync('input.txt', 'UTF-8')
const lines = data.split(/\r?\n/)

lines.forEach(line => {
    rucksack  = split(line, line.length / 2);
    let index = match(rucksack[0], rucksack[1]);
    let charCode = rucksack[0].charCodeAt(index);
    if (charCode > 96 && charCode < 123) {
        sum += charCode - 96;
    } else if (charCode > 64 && charCode < 91) {
        sum += charCode - 64 + 26;
    }
});

console.log(sum);

function match(item1, item2)
{
    for (var i = 0; i < item1.length; i++) {
        if (item2.includes(item1[i])) {
            return i;
        }
    }
}

function split(str, index) {
    const result = [str.slice(0, index), str.slice(index)];
  
    return result;
}