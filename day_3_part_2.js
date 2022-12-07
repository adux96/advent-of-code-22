// Import module, read data file and create array
const {readFileSync, promises: fsPromises, readFile, readSync} = require('fs');

function readSyncFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

// Function to find the common element between the three elves
function findCommonElement(arr1, arr2, arr3) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) { // if common element between first two arrays is found, then look through third array
                for (let n = 0; n < arr3.length; n++) {
                    if (arr3[n] === arr1[i]) {
                        return arr1[i];
                    }
                }
            }
        }
    }
}

const rucksackArr = readSyncFile(__dirname + '/day_3_data.txt');
let count = 0, priority = 0; regEx = /[A-Z]/;
for (let k = 0; k < rucksackArr.length; k+=3) {
    const arr1 = rucksackArr[k];
    const arr2 = rucksackArr[k + 1];
    const arr3 = rucksackArr[k + 2];
    let commonItem = findCommonElement(arr1, arr2, arr3);
    priority = parseInt(commonItem, 36) - 9;
    if ( regEx.test(commonItem) ) { // check to see if we have a capital letter
        priority += 26;
    }
    count += priority;
}

console.log("Total sum: " + count);
