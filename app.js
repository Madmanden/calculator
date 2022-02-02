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
