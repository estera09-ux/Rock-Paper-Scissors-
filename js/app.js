const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const drawScoreEl = document.getElementById('draw-score');
const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const resultMessageEl = document.getElementById('result-message');

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const choices = ['rock', 'paper', 'scissors'];

const emojis = {
  rock: '🪨',
  paper: '📄',
  scissors: '✂️'
};


function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
}


function animateChoice(element) {
  element.classList.remove('bounce');
  void element.offsetWidth;
  element.classList.add('bounce');
}


function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getWinner(playerChoice, computerChoice);

  playerChoiceEl.textContent = emojis[playerChoice];
  computerChoiceEl.textContent = emojis[computerChoice];

  animateChoice(playerChoiceEl);
  animateChoice(computerChoiceEl);

  resultMessageEl.className = 'result-message';

  if (result === 'win') {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    resultMessageEl.textContent = '🎉 You Win!';
    resultMessageEl.classList.add('win');
  } else if (result === 'lose') {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    resultMessageEl.textContent = '😢 You Lose!';
    resultMessageEl.classList.add('lose');
  } else {
    drawScore++;
    drawScoreEl.textContent = drawScore;
    resultMessageEl.textContent = "🤝 It's a Draw!";
    resultMessageEl.classList.add('draw');
  }
}


function resetGame() {
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;

  playerScoreEl.textContent = '0';
  computerScoreEl.textContent = '0';
  drawScoreEl.textContent = '0';

  playerChoiceEl.textContent = '❓';
  computerChoiceEl.textContent = '❓';

  resultMessageEl.className = 'result-message';
  resultMessageEl.textContent = 'Make your move!';
}


