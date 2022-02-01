const subtract = require("./subtract");

test("subtracts 10 - 5 to equal 5", () => {
  expect(subtract(10, 5)).toBe(5);
});
