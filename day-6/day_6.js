// Import module, read data file and create array
const {readFileSync, promises: fsPromises} = require('fs');
const { dirname } = require('path');

function readSyncFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}
// Function to check if there are any repeating characters in the string.
function checkString(chars) {
    for (let x = 0; x < chars.length - 1; x++){
        for(let y = x + 1; y < chars.length; y++){
            if (chars.charAt(x) === chars.charAt(y)){
                return 0;
            }
        }
    }
    return 1;
}

const arr=readSyncFile(__dirname + '/day_6_data.txt');
let s = arr[0];
for(let i = 0; i < s.length; i++) {
    if (checkString(s.slice(i, i + 14))) { // Part 1 has slice(i, i + 4). Part 2 has slice(i, i + 14)
        console.log("position: " + i + " and string is: " + s.slice(i, i + 14)); 
        console.log(i + 14); // Actual solution to the exercise
        break;
    }
}
