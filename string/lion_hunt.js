const testCase1 = "Z";
const testCase2 = "L L";
const testCase3 = "L  ";
const testCase4 = "  Z ";
const testCase5 = "   Z ";
const testCaseToUse = testCase5;
const testCaseLength = testCaseToUse.length;
let countOfL = 0;
let countOfZ = 0;
let countOfSpace = 0;

for(let index = 0; index < testCaseLength; index++) {
    if(testCaseToUse[index] === "L") {
        countOfL++;
    }
    else if(testCaseToUse[index] === "Z") {
        countOfZ++;
    }
    else if(testCaseToUse[index] === " ") {
        countOfSpace++;
    }
}

let shortestDistance = 0;
if(!countOfL || !countOfZ) {
    shortestDistance = -1;
}
console.log("Length of \"",testCaseToUse,"\"is",testCaseLength);
console.log("No of L =",countOfL);
console.log("No of Z =",countOfZ);
console.log("No of Space =",countOfSpace);
console.log("Shortest distance between L and Z =",shortestDistance);
