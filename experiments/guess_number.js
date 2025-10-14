function guessNumber() {
  return +prompt("\nGuess the number :");
}

function playGame(number, noOfMoves) {
  if (noOfMoves === 0) {
    console.log(`\nThe number was ${number}\n\nBetter Luck Next Time! 😢`);
    return;
  }

  const guess = guessNumber();

  if (guess > number) {
    console.log("Too large!");
  }

  if (guess === number) {
    console.log("You won!!! 🏆");
    return;
  }
  console.log(`Remaining move :${noOfMoves - 1}`);
  return playGame(number, noOfMoves - 1);
}

function startGame() {
  const upperRange = 100;
  const lowerRange = 0;
  const number = lowerRange + Math.floor((upperRange - lowerRange) * Math.random());
  const totalNoOfMoves = +prompt("How many moves do you want?");
  playGame(number, totalNoOfMoves);
}

function playAgain() {
  const decision = confirm("\nDo you want to play again?");
  return decision;
}

function main() {
  startGame();

  while (playAgain()) {
    startGame();
  }
}

main();
