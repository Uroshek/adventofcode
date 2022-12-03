// https://adventofcode.com/2022/day/1

const fs = require('fs')
let elf_sum = [];
let elf = 0;

const data = fs.readFileSync('input.txt', 'UTF-8')
const lines = data.split(/\r?\n/)

lines.forEach(line => {
    if (line != '') {
        elf += parseInt(line);
    } else {
        elf_sum.push(elf);
        elf = 0;
    }
});

result = elf_sum
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((partialSum, a) => partialSum + a, 0);

console.log(result)