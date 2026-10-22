let secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;
let gameOver = false;

function checkGuess() {
  if (gameOver) return;

  const input = document.getElementById("guess");
  const guess = Number(input.value);
  const message = document.getElementById("message");

  if (input.value === "" || guess < 1 || guess > 20) {
    message.textContent = "Enter a number from 1 to 20!";
    return;
  }

  attempts++;
  document.getElementById("attempts").textContent = attempts;

  if (guess === secretNumber) {
    message.textContent = "Correct! You won! 🎉";
    gameOver = true;
  } else if (guess < secretNumber) {
    message.textContent = "Too low! Try a higher number.";
  } else {
    message.textContent = "Too high! Try a lower number.";
  }

  input.value = "";
  input.focus();
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  attempts = 0;
  gameOver = false;

  document.getElementById("attempts").textContent = 0;
  document.getElementById("message").textContent =
    "Make your first guess!";
  document.getElementById("guess").value = "";
}
