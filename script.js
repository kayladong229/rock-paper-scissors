function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  // console.log(num);

  if (num <= 1) {
    return "Rock";
  } else if (num > 1 && num <= 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // Format player choice to start with uppercase letter
  let userChoice =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.substr(1).toLowerCase();

  console.log("You chose: " + userChoice);
  console.log("Computer chose: " + computerSelection);

  if (userChoice === "Rock" && computerSelection === "Scissors") {
    console.log("You win! Rock beats scissors.");
    return 1;
  } else if (userChoice === "Rock" && computerSelection === "Paper") {
    console.log("You lose! Paper beats rock.");
    return -1;
  } else if (userChoice === "Paper" && computerSelection === "Rock") {
    console.log("You win! Paper beats rock.");
    return 1;
  } else if (userChoice === "Paper" && computerSelection === "Scissors") {
    console.log("You lose! Scissors beats paper.");
    return -1;
  } else if (userChoice === "Scissors" && computerSelection === "Paper") {
    console.log("You win! Scissors beats paper.");
    return 1;
  } else if (userChoice === "Scissors" && computerSelection === "Rock") {
    console.log("You lose! Rock beats scissors.");
    return -1;
  } else {
    console.log("It's a tie.");
    return 0;
  }
}

function game() {
  let playerScore = 0;
  let compScore = 0;

  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt(
      "Type in one of the following options: rock, paper, scissors."
    );
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    if (result === 1) {
      playerScore++;
    } else if (result === -1) {
      compScore++;
    }
  }

  console.log("Final player score: " + playerScore);
  console.log("Final computer score: " + compScore);

  playerScore > compScore
    ? console.log("You win! Congratulations!")
    : console.log("Computer wins! Better luck next time.");
}

game();
