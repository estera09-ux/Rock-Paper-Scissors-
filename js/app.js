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


}
resultMessageEl.className = "result-message";



