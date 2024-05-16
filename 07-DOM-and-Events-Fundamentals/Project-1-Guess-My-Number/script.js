'use strict';

let score = 20;
let highScore = 0;
let secreteNumber = generateRandomNumber();
console.log(secreteNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    if (score > 1) {
      document.querySelector('.score').textContent = --score;
      displayMessage('⛔ No  Number!');
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('🩻 You lost the game!');
    }

    // GUESS IS CORRECT
  } else if (guess === secreteNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector(
        '.label-highscore'
      ).textContent = `🥇 Highscore: ${highScore}`;
    }

    // GUESS IS WRONG
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      document.querySelector('.score').textContent = --score;
      displayMessage(guess > secreteNumber ? '📈 Too High!' : '📉 Too Low!');
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('🩻 You lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = generateRandomNumber();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  console.log(secreteNumber);
});

const generateRandomNumber = () => Math.floor(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
