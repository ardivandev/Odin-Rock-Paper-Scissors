// User selects/enters (rock, paper, scissors)
// Computer makes a random selection (rock, paper, scissors)
// Compare the user's choice with the computer's choice

// User rock and Comp scissors -> User win
// User scissors and Comp paper -> User win
// User papaer and Comp rock -> User win

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomChoice = Math.random();

  if (randomChoice >= 0 && randomChoice < 0.35) {
    return 'rock';
  } else if (randomChoice >= 0.35 && randomChoice < 0.65) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  while (true) {
    let humanChoice = prompt('Enter your choice (rock, scissors, paper): ');

    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
      alert('Invalid choice. Please enter rock, paper, or scissors.');
    } else {
      return humanChoice.trim().toLowerCase();
    }
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert(`You choice ${humanChoice} and Computer choice ${computerChoice}, It's a tie`);
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    alert(`You choice ${humanChoice} and Computer choice ${computerChoice}, You Win`);
  } else {
    computerScore++;
    alert(`You choice ${humanChoice} and Computer choice ${computerChoice}, Computer Win`);
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log('Human Score: ' + humanScore);
  console.log('Computer Score: ' + computerScore);
}

playGame();
