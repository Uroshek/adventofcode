// https://adventofcode.com/2022/day/3

const fs = require('fs')
let sum = 0;
let lineNumber = 0;
let line1 = '';
let line2 = '';
let line3 = '';

const data = fs.readFileSync('input.txt', 'UTF-8')
const lines = data.split(/\r?\n/)

lines.forEach(line => {
    lineNumber++;
    if (lineNumber == 1) {
        line1 = line;
    } else if (lineNumber == 2) {
        line2 = line;
    } else {
        line3 = line;
        let index = match(line1, line2, line3);
    
        let charCode = line1.charCodeAt(index);
        if (charCode > 96 && charCode < 123) {
            sum += charCode - 96;
        } else if (charCode > 64 && charCode < 91) {
            sum += charCode - 64 + 26;
        }
        lineNumber = 0;
    }
});

console.log(sum);

function match(item1, item2, item3)
{
    for (var i = 0; i < item1.length; i++) {
        if (item2.includes(item1[i]) && item3.includes(item1[i])) {
            return i;
        }
    }
}

function split(str, index) {
    const result = [str.slice(0, index), str.slice(index)];
  
    return result;
}