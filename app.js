import add from "./add";
import subtract from "./subtract";
import multiply from "./multiply";
import division from "./division";

function operate(operator, num1, num2) {
  switch (operator) {
    case add:
      return add(num1, num2);
    case subtract:
      return subtract(num1, num2);
    case multiply:
      return multiply(num1, num2);
    case division:
      return division(num1, num2);
    default:
      return "Error: I don't know that operator.";
  }
}

console.log(operate(division, 10, 2));
