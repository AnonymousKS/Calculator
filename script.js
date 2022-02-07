let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let resetFlag = false;

const numberbtn = document.querySelectorAll(".numbers");
const operatorbtn = document.querySelectorAll(".operator");
const equalbtn = document.querySelector(".equal");
const clearbtn = document.querySelector(".clear");
const decimalbtn = document.querySelector(".decimal");
const backspacebtn = document.querySelector(".backspace");
const previousScreen = document.querySelector(".screen-last");
const currentScreen = document.querySelector(".screen-current");

numberbtn.forEach((button) =>
  button.addEventListener("click", () => displayNumber(button.textContent))
);

operatorbtn.forEach((button) =>
  button.addEventListener("click", () => setOperator(button.textContent))
);

clearbtn.addEventListener("click", clear);
backspacebtn.addEventListener("click", backspace);
equalbtn.addEventListener("click", evaluate);
decimalbtn.addEventListener("click", addDecimal);

function displayNumber(number) {
  if (currentScreen.textContent === "0" || resetFlag) resetScreen();
  currentScreen.textContent += number;
}

function resetScreen() {
  currentScreen.textContent = "";
  resetFlag = false;
}

function clear() {
  currentScreen.textContent = "0";
  previousScreen.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

function backspace() {
  currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1);
  if (currentScreen.textContent === "") currentScreen.textContent = "0";
}

function setOperator(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = currentScreen.textContent;
  currentOperation = operator;
  previousScreen.textContent = `${firstOperand} ${currentOperation}`;
  resetFlag = true;
}

function evaluate() {
  if (currentOperation === null || resetFlag) return;
  if (currentOperation === "/" && currentScreen.textContent === "0") {
    currentScreen.textContent = "You dumb or what.";
    return;
  }
  secondOperand = currentScreen.textContent;
  currentScreen.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  previousScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function addDecimal() {
  if (resetFlag) resetScreen();
  if (currentScreen.textContent === "") currentScreen.textContent = "0";
  if (currentScreen.textContent.includes(".")) return;
  currentScreen.textContent += ".";
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}
