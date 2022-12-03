// https://adventofcode.com/2022/day/1

const fs = require('fs')
let elf, maxElf = 0;


const data = fs.readFileSync('input.txt', 'UTF-8')
const lines = data.split(/\r?\n/)

lines.forEach(line => {
    if (line != '') {
        elf += parseInt(line);
    } else {
        elf > maxElf && (maxElf = elf);
        elf = 0;
    }
});

console.log(maxElf);