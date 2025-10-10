const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";

function getTextIndex(char) {
  return ALPHABETS.indexOf(char);
}

function getEncodedChar(charIndex, secretNumber) {
  const encodedCharIndex = (charIndex + secretNumber) % ALPHABETS.length;
  return ALPHABETS[encodedCharIndex];
}

function encodeWords(word, secretNumber) {
  let newWord = "";

  for (let index = 0; index < word.length; index++) {
    const curPosition = getTextIndex(word[index]);
    newWord += getEncodedChar(curPosition, secretNumber);
  }
  return newWord;
}

function encodeText(text, secretNumber) {
  const newTextWords = [];
  const words = text.split(" ");

  for (let index = 0; index < words.length; index++) {
    const newTextWord = encodeWords(words[index], secretNumber);
    newTextWords.push(newTextWord);
  }
  return newTextWords.join(" ");
}

function startEncodingText() {
  const text = prompt("Enter a text : ");
  const numberAsText = prompt("Enter the secret number : ");
  const secretNumber = parseInt(numberAsText);
  const encodedText = encodeText(text, secretNumber);

  console.log("Encoded text :", encodedText);
}

startEncodingText();
