function encodeNumber(data) {
  return "i".concat(data).concat("e");
}

function encodeData(dataType, data) {
  switch (dataType) {
    case "number": return encodeNumber(data);
  }
}

function bencodeEncoder(data) {
  const dataType = typeof data;
  return encodeData(dataType, data);
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

  if (expectedValue !== actualValue) {
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
  testBencodeEncoder("negative number", -123, "i-123e");
}

function testAllBencodeEncoder() {
  console.log(dashes("Bencode Encoder"));
  testIntegers();
}

testAllBencodeEncoder();
