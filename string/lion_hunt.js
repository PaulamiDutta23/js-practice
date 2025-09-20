const testCase1 = "L";
const testCase2 = "L L";
const testCase3 = "L  ";
const testCase4 = "  L ";
const testCase5 = "    L";
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
console.log(testCaseLength);
console.log(countOfL);
console.log(countOfZ);
console.log(countOfSpace);
