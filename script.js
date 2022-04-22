'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const styleChange = function (color, width) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number');
    styleChange('#60b347', '30rem');
    document.querySelector('.score').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high !' : 'too low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('loser !');
      score--;
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing..');
  document.querySelector('.score').textContent = score;
  styleChange('#222', '15rem');
  document.querySelector('.number').textContent = '?';
});
