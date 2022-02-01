const { add, subtract, multiply, divide } = require("../app");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 10 - 5 to equal 5", () => {
  expect(subtract(10, 5)).toBe(5);
});

test("multiplies 10 * 2 to equal 20", () => {
  expect(multiply(10, 2)).toBe(20);
});

test("divides 10 / 2 to equal 5", () => {
  expect(divide(10, 2)).toBe(5);
});
