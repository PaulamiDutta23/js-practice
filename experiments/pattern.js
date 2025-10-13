function generateChar(r, c, char = "*-") {
  const isEqual = r === c;
  return isEqual ? char[0] : char[1];
}

function generateRow(r, cols) {
  let row = "";
  for (let c = 1; c <= cols; c++) {
    row += generateChar(r, c);
  }

  return row;
}

function generatePattern(rows, cols) {
  const lines = [];
  for (let r = 1; r <= rows; r++) {
    const line = generateRow(r, cols);
    lines.push(line);
  }

  return lines.join("\n");
}

function createDifferentPatterns() {
  const row = +prompt("Enter row number :");
  const column = +prompt("Enter column number :");
  const pattern = generatePattern(row, column);
  console.log(pattern);
}

createDifferentPatterns();
