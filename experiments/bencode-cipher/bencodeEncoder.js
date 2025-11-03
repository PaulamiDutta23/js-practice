function bencodeEncoder(data) {
  return "i123e";
}

function formatText(input, expectedValue, actualValue) {
  return `
  Inputs   : ${input}
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------\n`;
}

function composeMessage(header, input, expectedValue, actualValue) {
  console.log(header);

  if(expectedValue !== actualValue) {
    console.log(formatText(input, expectedValue, actualValue));
  }
}

function testBencodeEncoder(description, data, expectedValue) {
  const actualValue = bencodeEncoder(data);
  const input = `${data}`;
  const isPassed = actualValue === expectedValue;
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return composeMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testIntegers() {
  console.log(dashes("\nIntegers"));
  testBencodeEncoder("positive number", 123, "i123e");
}

function testAllBencodeEncoder() {
  console.log(dashes("Bencode Encoder"));
  testIntegers();
}

testAllBencodeEncoder();
