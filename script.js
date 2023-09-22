const pageContent = document.querySelector(".main-container");
const buttons = document.querySelectorAll("button");
const results = document.createElement("div");
pageContent.appendChild(results);

const playerPick = document.createElement("p");
results.appendChild(playerPick);
const computerPick = document.createElement("p");
results.appendChild(computerPick);

const resultLine = document.createElement("p");
resultLine.style.fontWeight = "bold";
resultLine.style.backgroundColor = 'lightblue';
results.appendChild(resultLine);

const playerScoreCount = document.createElement("h3");
results.appendChild(playerScoreCount);

const computerScoreCount = document.createElement("h3");
results.appendChild(computerScoreCount);

const announcement = document.createElement('h2');
results.appendChild(announcement);

const replay = document.createElement('p');
results.appendChild(replay);

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;

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

  playerPick.textContent = "You chose: " + userChoice;
  computerPick.textContent = "Computer chose: " + computerSelection;

  if (userChoice === "Rock" && computerSelection === "Scissors") {
    resultLine.textContent = "You win! Rock beats scissors.";
    return 1;
  } else if (userChoice === "Rock" && computerSelection === "Paper") {
    resultLine.textContent = "You lose! Paper beats rock.";
    return -1;
  } else if (userChoice === "Paper" && computerSelection === "Rock") {
    resultLine.textContent = "You win! Paper beats rock.";
    return 1;
  } else if (userChoice === "Paper" && computerSelection === "Scissors") {
    resultLine.textContent = "You lose! Scissors beats paper.";
    return -1;
  } else if (userChoice === "Scissors" && computerSelection === "Paper") {
    resultLine.textContent = "You win! Scissors beats paper.";
    return 1;
  } else if (userChoice === "Scissors" && computerSelection === "Rock") {
    resultLine.textContent = "You lose! Rock beats scissors.";
    return -1;
  } else {
    resultLine.textContent = "It's a tie.";
    return 0;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result === 1) {
      playerScore++;
    } else if (result === -1) {
      computerScore++;
    }

    playerScoreCount.textContent = "Your score so far: " + playerScore;
    computerScoreCount.textContent = "Computer's score so far: " + computerScore;

    if (playerScore === 5) {
      announcement.textContent = "You win! Congratulations!";
      replay.textContent = "Refresh your browser to play another round.";
    } else if (computerScore === 5) {
      announcement.textContent = "Computer wins! Better luck next time.";
      replay.textContent = "Refresh your browser to play another round.";
    }
  });
});

// **previous game function**
// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 1; i <= 5; i++) {
//     const playerSelection = prompt(
//       "Type in one of the following options: rock, paper, scissors."
//     );
//     const computerSelection = getComputerChoice();

//     const result = playRound(playerSelection, computerSelection);
//     if (result === 1) {
//       playerScore++;
//     } else if (result === -1) {
//       computerScore++;
//     }
//   }

//   console.log("Final player score: " + playerScore);
//   console.log("Final computer score: " + computerScore);

//   playerScore > computerScore
//     ? console.log("You win! Congratulations!")
//     : console.log("Computer wins! Better luck next time.");
// }

// game();