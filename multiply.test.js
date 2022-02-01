const multiply = require("./multiply");

test("multiplies 10 * 2 to equal 20", () => {
  expect(multiply(10, 2)).toBe(20);
});
