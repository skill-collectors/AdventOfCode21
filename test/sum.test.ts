import { sumNum, squared } from "../solutions/sumNums";

test("adds 1 + 2 to equal 3", () => {
  expect(sumNum(1, 2)).toBe(3);
});

test("square 3 to equal 9", () => {
  expect(squared(3)).toBe(9);
});
