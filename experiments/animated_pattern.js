function delay() {
  for (let i = 0; i < 600000000; i++) { }
}

function generateChar(r, c, rowCols, pattern, char = "*-") {
  const patternType = ["left diagonal", "right diagonal", "both diagonals"];
  const isEqualRowCol = r === c;
  const rightDiagonal = r + c === rowCols - 1;
  switch (pattern) {
    case patternType[0]:
      return isEqualRowCol ? char[0] : char[1];
    case patternType[1]:
      return rightDiagonal ? char[0] : char[1];
    case patternType[2]:
      return isEqualRowCol || rightDiagonal ? char[0] : char[1];
  }
}

function generateRow(r, rowCols, pattern) {
  let row = "";
  for (let c = 0; c < rowCols; c++) {
    row += generateChar(r, c, rowCols, pattern);
  }
  return row;
}

function generatePattern(rowsCols, pattern) {
  for (let r = 0; r < rowsCols; r++) {
    const line = generateRow(r, rowsCols, pattern);
    console.log(line);
    delay();
    console.clear();
  }
  return;
}

function createDifferentPatterns() {
  console.log(`You have options for pattern type :
    -> left diagonal
    -> right diagonal
    -> both diagonals`);
  const rowColumn = +prompt("Enter row & column number :");
  const pattern = prompt("Enter the type of pattern you want :")
  generatePattern(rowColumn, pattern);
}

createDifferentPatterns();
