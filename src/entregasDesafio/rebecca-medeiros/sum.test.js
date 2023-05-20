const sum = require("./sum");

test("somando 1+2 não deve retornar 0", () => {
  expect(sum(1, 2)).not.toBe(0);
});

test("1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});
