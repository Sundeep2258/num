let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let successMessage = "Congrachulations! You got it right";
let tryAgainMessage = "Please Try Again!";

function restartGame() {
  let firstRandomNumberElement = Math.random() * 100;
  let secondRandomNumberElement = Math.random() * 100;

  firstNumberElement.textContent = Math.ceil(firstRandomNumberElement);
  secondNumberElement.textContent = Math.ceil(secondRandomNumberElement);
  gameResultElement.textContent = "";
  userInputElement.value = "";
}
restartGame();

function checkResult() {
  let firstRandomNumberIntiger = parseInt(firstNumberElement.textContent);
  let secondRandomNumberIntiger = parseInt(secondNumberElement.textContent);
  let userEnterSum = parseInt(userInputElement.value);
  let sumofTwoRandomIntigers =
    firstRandomNumberIntiger + secondRandomNumberIntiger;
  if (userEnterSum === sumofTwoRandomIntigers) {
    gameResultElement.textContent = successMessage;
    gameResultElement.style.backgroundColor = "#028a0f";
  } else {
    gameResultElement.textContent = tryAgainMessage;
    gameResultElement.style.backgroundColor = "#eb4034";
  }
}
