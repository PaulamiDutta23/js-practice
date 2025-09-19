const realString = "ABA";
let reverseString = "";

let iterator = 1;
let index = realString.length-iterator;
while(iterator <= realString.length) {
    reverseString +=  realString[index];
    iterator++;
    index--;
}

console.log(realString);
console.log(reverseString);
const result = (realString === reverseString) ? "is a palindrome string" : "is not a palindrome string";
console.log(realString, result);
