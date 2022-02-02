// module.exports = { add, multiply, subtract, divide, operate };

function add(num1, num2 = 0) {
  return num1 + num2;
}

function subtract(num1, num2 = 0) {
  return num1 - num2;
}

function multiply(num1, num2 = 1) {
  return num1 * num2;
}

function divide(num1, num2 = 1) {
  if (num1 === 0 || num2 === 0) {
    return 0;
  }
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case add:
      return add(num1, num2);
    case subtract:
      return subtract(num1, num2);
    case multiply:
      return multiply(num1, num2);
    case divide:
      return divide(num1, num2);
    default:
      return "Error: I don't know that operator.";
  }
}

////////////////////////////////////////////////////////////////////

const display = document.querySelector(".display");
const buttons = document.querySelector(".calculator__body");
const clearBtn = document.querySelector(".clear");

let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

buttons.addEventListener("click", (e) => {
  buttonClick(e.target.innerText);
});

function buttonClick(value) {
  // Check if value is a number or an operator
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  display.value = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    // return nothing so that the function will end doing nothing
    return;
  }

  const intBuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = symbol;
  buffer = "0";
}

function flushOperation(intBuffer) {
  switch (previousOperator) {
    case "+":
      runningTotal += intBuffer;
      break;
    case "−":
      runningTotal -= intBuffer;
      break;
    case "×":
      runningTotal *= intBuffer;
      break;
    case "÷":
      runningTotal /= intBuffer;
      break;
  }
}
