// Import module, read data file and create array
const {readFileSync, promises: fsPromises} = require('fs');

function readSyncFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

// Function to see if one range fully encapsulates the other. need to parseInt, otherwise these values are strings.
function testRanges(range1, range2) {
    if ( (parseInt(range1[0]) <= parseInt(range2[0])) && (parseInt(range1[1]) >= parseInt(range2[1])) ) {
        return 1;
    } else if ( (parseInt(range2[0]) <= parseInt(range1[0])) && (parseInt(range2[1]) >= parseInt(range1[1])) ) {
        return 1;
    } else {
        return 0;
    }
}

const arr = readSyncFile(__dirname + '/day_4_data.txt');
let count = 0;
for (let i = 0; i < arr.length; i++) {
    // Split the array and subsequent arrays into readable data.
    let s = arr[i].split(",");
    let elfOne = s[0].split("-");
    let elfTwo = s[1].split("-");
    count += testRanges(elfOne, elfTwo, i);
}

console.log(count)
