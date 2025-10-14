const ELEMENTS = ["🪨", "📜", "✂️"];

function hasUserWon(moveCombination) {
  switch (moveCombination) {
    case "01":
    case "12":
    case "20":
      return true;
    default:
      return false;
  }
}

function hasSystemWon(moveCombination) {
  switch (moveCombination) {
    case "10":
    case "21":
    case "02":
      return true;
    default:
      return false;
  }
}

function displayFinalResult(points) {
  console.log("!!! Game Over !!!");

  if (points[0] > points[1]) {
    return console.log("\n\n🏆 You rocked it !!!");
  }
  return console.log("\n\n😔 Better Luck Next Time !!!");
}

function displayResult(systemMoveNumber, userMoveNumber, userPoint, systemPoint) {
  const message = `User's point :${userPoint}\nSystem's point :${systemPoint}
  \nUser's move :${ELEMENTS[userMoveNumber]}\t\tSystem's move :${ELEMENTS[systemMoveNumber]}\n`;

  console.log(message);
}

function playGame(systemMoveNumber, userMoveNumber, points) {
  let userPoint = points[0];
  let systemPoint = points[1];
  const moveCombination = "" + systemMoveNumber + userMoveNumber;

  if (hasUserWon(moveCombination)) {
    userPoint++;
  } else if (hasSystemWon(moveCombination)) {
    systemPoint++;
  } else {
    console.log("TIE !!!");
  }

  displayResult(systemMoveNumber, userMoveNumber, userPoint, systemPoint);
  return [userPoint, systemPoint];
}

function showDisclaimer() {
  const introductionMessage = `
  😁 GAME : STONE-PAPER-SCISSOR 😁\n
  🤗 Read the instructions 🤗\n\n
  👉 This game is against System
  👉 There are 3 elements : Rock, Paper, Scissor\n
     Enter your move as follows ->
     0 : Rock
     1 : Paper
     2 : Scissor
  👉 Your goal is to get 3 points
  👉 If system gets 3 points it will win, otherwise you will win`;
  console.log(introductionMessage);
}

function startGame(points) {
  if (points[0] === 3 || points[1] === 3) {
    return displayFinalResult(points);
  }

  const systemMoveNumber = Math.floor(ELEMENTS.length * Math.random());
  const userMoveNumber = +prompt("\nEnter your move :");
  points = playGame(systemMoveNumber, userMoveNumber, points);
  return startGame(points);
}

function playAgain() {
  const decision = confirm("\nDo you want to play again?");
  return decision;
}

function main() {
  showDisclaimer();
  const points = [0, 0];
  startGame(points);

  while (playAgain()) {
    startGame(points);
  }
}

main();
