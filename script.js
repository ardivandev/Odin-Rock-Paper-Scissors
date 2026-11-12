// User selects/enters (rock, paper, scissors)
// Computer makes a random selection (rock, paper, scissors)
// Compare the user's choice with the computer's choice

// User rock and Comp scissors -> User win
// User scissors and Comp paper -> User win
// User paper and Comp rock -> User win

const result = document.querySelector('#result');
const elHumanScore = document.querySelector('#human-score');
const elComputerScore = document.querySelector('#computer-score');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // Method 1
  // let randomChoice = Math.random();

  // if (randomChoice >= 0 && randomChoice < 0.35) {
  //   return 'rock';
  // } else if (randomChoice >= 0.35 && randomChoice < 0.65) {
  //   return 'paper';
  // } else {
  //   return 'scissors';
  // }

  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChose, computerChose = getComputerChoice()) {
  if (humanChose === computerChose) {
    result.textContent = `You chose ${humanChose} and Computer choice ${computerChose}, It's a tie`;
  } else if (
    (humanChose === 'rock' && computerChose === 'scissors') ||
    (humanChose === 'paper' && computerChose === 'rock') ||
    (humanChose === 'scissors' && computerChose === 'paper')
  ) {
    humanScore++;
    result.textContent = `You chose ${humanChose} and Computer choice ${computerChose}, You Win`;
  } else {
    computerScore++;
    result.textContent = `You chose ${humanChose} and Computer choice ${computerChose}, Computer Win`;
  }

  elHumanScore.textContent = humanScore;
  elComputerScore.textContent = computerScore;
}

document.querySelectorAll('[data-choice]').forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', () => playRound(btn.dataset.choice));
});
