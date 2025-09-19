const firstNumber = 6;
const secondNumber = 5;
const suffix = "is larger than";

const result = firstNumber > secondNumber ? firstNumber : secondNumber;
const otherNumber = result === firstNumber ? secondNumber : firstNumber;

console.log(result, suffix, otherNumber);
