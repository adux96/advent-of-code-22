// Import module, read data file and create array
const {readFileSync, promises: fsPromises} = require('fs');

function readSyncFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}
/* Function to parse the instruction strings.
Returns array numArr where:
    numArr[0] is the amount of boxes to move
    numArr[1] is the starting stack to remove the boxes from
    numArr[2] is the ending stack to move the boxes to
*/
function findNums(s){
    const numArr = [];
    let num = '';
    let flag = false;
    for(let char of s){
        if(/[0-9]/.test(char)){
            num = num.concat(char);
            flag = true;
        }else{
            if(flag == true){
                numArr.push(num);
                num = '';
                flag = false;
            }
        }
    }
    if(num !== ''){
        numArr.push(num);
    }
    return numArr;
}

const arr = readSyncFile(__dirname + "/day_5_data.txt");
const boxes = [];
let lastLine = 0;
// Get the stack information into their own arrays in boxes array
for(let j = 0; j < arr.length; j++){
    if((/[A-Z]|\s/).test(arr[j][1]) == false){
        lastLine = j;
        break;
    }
    boxes[j]=[];
    for (let i = 1; i < arr[j].length; i = i + 4) {
        boxes[j].push(arr[j][i])
    }
}
// Reorient boxes array 
const newBoxes = [];
for(let x = 0; x < boxes[0].length; x++){
    newBoxes[x] = [];
    for(let y = boxes.length - 1; y >= 0; y--){
        if(boxes[y][x] == ' '){
            break
        }
        newBoxes[x].push(boxes[y][x]);
    }
}
// Read through rest of file, restack boxes accordingly
for(let i = lastLine + 2; i < arr.length; i++){
    const numsArr = findNums(arr[i]);
    let box = numsArr[0], start = numsArr[1] - 1, end = numsArr[2] - 1; 
    const tempArr = newBoxes[start].splice(-box, box);
    newBoxes[end] = newBoxes[end].concat(tempArr.reverse());
}
// Finally, see what the top element of each stack is
let answer = '';
for(let stack of newBoxes){
    answer += stack[stack.length - 1];
}
console.log(answer);
