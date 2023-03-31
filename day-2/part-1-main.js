const {readFileSync, promises: fsPromises} = require('fs');

// Function to read input file into new array
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

// Create array
const arr = syncReadFile(__dirname + '/data.txt');
let totalScore = 0;
const symbols = {
    'X': 1,
    'Y': 2,
    'Z': 3
};
const winOrLose = {
    'A X': 3,
    'B Y': 3,
    'C Z': 3,
    'C X': 6,
    'A Y': 6,
    'B Z': 6,
    'A Z': 0,
    'B X': 0,
    'C Y': 0
};

// Loop through array, add up total score
for (let i = 0; i < arr.length; i++) {
    totalScore += winOrLose[arr[i]] + symbols[arr[i][2]];
}

console.log("totalScore: " + totalScore);
