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