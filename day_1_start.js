const {readFileSync, promises: fsPromises} = require('fs');

// Function to read input file into new array
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

// Create array, and convert to ints
const arr = syncReadFile(__dirname + '/input.txt');
numArr = [];
for (let n = 0; n < arr.length; n++) {
    numArr[n] = parseInt(arr[n]);
}

// Count up numbers in new array
const countArr = [];
let count = 0;
let num = 0;
for (let i = 0; i < numArr.length; i++) {
    num = numArr[i];
    if ( isNaN(num) ) {
        countArr.push(count);
        count = 0;
    } else {
        count += num;
    }
}

// Sort descending, return first value
countArr.sort( function(a,b){return b - a});
console.log("Part 1: " + countArr[0]);
let sum = countArr[0] + countArr[1] + countArr[2]
console.log("Part 2: "+ sum)
