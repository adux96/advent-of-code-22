const {readFileSync, promises: fsPromises} = require('fs');

// Function to read input file into new array
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

// Create array
const arr = syncReadFile(__dirname + '/day_1_input.txt');

// Count up numbers in new array countArr
const countArr = [];
let count = 0, num = 0;
for (let i = 0; i < arr.length; i++) {
    num = parseInt(arr[i]);
    if ( isNaN(num) ) { // If we are evaluating a blank line, add count to countArr, reset count
        countArr.push(count);
        count = 0;
    } else {
        count += num;
    }
}

// Part 1: Sort descending, return first value
countArr.sort( function(a,b){return b - a});
console.log("Part 1: " + countArr[0]);
// Part 2: Return first three values
let sum = countArr[0] + countArr[1] + countArr[2]
console.log("Part 2: "+ sum)
