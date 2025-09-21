const testCase1 = "ZZ";
const testCase2 = "L L";
const testCase3 = "L  ";
const testCase4 = "LZ";
const testCase5 = "L   Z";
const testCaseToUse = testCase2;
const testCaseLength = testCaseToUse.length;
let countOfL = 0;
let countOfZ = 0;
let countOfSpace = 0;
let shortestDistance;
let count = 0;
for(let index = 0; index < testCaseLength; index++) {
    if(testCaseToUse[index] === "L" || testCaseToUse[index] === "Z") {
        if(testCaseToUse[index+1] === "L" || testCaseToUse[index+1] === "Z") {
            shortestDistance = 0;
        }
    }
    else if(testCaseToUse[index] === " ") {
            count++;
            shortestDistance = count;
            
    }
}

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

if(!countOfL || !countOfZ) {
    shortestDistance = -1;
}
console.log("Length of \"",testCaseToUse,"\"is",testCaseLength);
console.log("No of L =",countOfL);
console.log("No of Z =",countOfZ);
console.log("No of Space =",countOfSpace);
console.log("Shortest distance between L and Z =",shortestDistance);
