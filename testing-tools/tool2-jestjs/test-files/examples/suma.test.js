const suma = require("./sum");

test("sum 1 + 2 is equal 3", () => {
  expect(suma(1, 2)).toBe(3);
});

test("sum 1 + a is equal 3", () => {
  expect(suma(1, "a")).toBe("1a");
});

test("sum 1 + a is equal 3", () => {
  expect(suma(1, "10")).toBe("110");
});
