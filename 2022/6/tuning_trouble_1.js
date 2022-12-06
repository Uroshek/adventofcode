// https://adventofcode.com/2022/day/6

const fs = require('fs')

const data = fs.readFileSync('input.txt', 'UTF-8')
const lines = data.split(/\r?\n/)

lines.forEach(line => {
    for (let index = 4; index < line.length; index++) {
        if(stringHasUniqueChars(line.slice(index - 4, index))) {
            console.log(index);
            return;
        }
        
    }
});

function stringHasUniqueChars(string) { 
    const uniqueChars = new Set([...string]); 
    const stringedUniqueChars = [...uniqueChars].join(''); 
    return string === stringedUniqueChars; 
 } 
