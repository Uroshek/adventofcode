// https://adventofcode.com/2022/day/4

const fs = require('fs')
let sum = 0;

const data = fs.readFileSync('input.txt', 'UTF-8')
const lines = data.split(/\r?\n/)

lines.forEach(line => {
    pairs  = line.split(',');
    elf1 = pairs[0].split('-').map(x => parseInt(x));
    elf2 = pairs[1].split('-').map(x => parseInt(x));

    if (elf1[0] <= elf2[0] && elf1[1] >= elf2[1]) {
        sum++;
    } else if (elf1[0] >= elf2[0] && elf1[1] <= elf2[1]) {
        sum++;
    }
    
});

console.log(sum);