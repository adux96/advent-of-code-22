const {readFileSync, promises: fsPromises} = require('fs');

// Function to read input file into new array
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

// Function to determine if I win
function winLoseDraw(self, enemy) {
    if ((self === 'X' & enemy === 'A') || (self === 'Y' & enemy === 'B') || (self === 'Z' & enemy === 'C')) {
        return 3;
    } else if ((self === 'X' & enemy === 'C') || (self === 'Y' & enemy === 'A') || (self === 'Z' & enemy === 'B')) {
        return 6;
    } else {
        return 0;
    }
}

//Function to determine how many points for what I played
function symbolPoints(sym) {
    if (sym === 'X') {
        return 1;
    } else if (sym === 'Y') {
        return 2;
    } else {
        return 3;
    }
}

// Create array
const arr = syncReadFile(__dirname + '/day_2_data.txt');
let totalScore = 0;
let opponent = '';
let self = '';

// Loop through array, add up total score
for (let i = 0; i < arr.length; i++) {
    self = arr[i][2];
    opponent = arr[i][0];
    totalScore += winLoseDraw(self, opponent) + symbolPoints(self)
}

console.log("totalScore: " + totalScore);

