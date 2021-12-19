import { countIncreases, countWindowIncreases } from "../solutions/1";

const numbers = [
  199,
  200,
  208,
  210,
  200,
  207,
  240,
  269,
  260,
  263,
]

test("part1 sample", () => {
  expect(countIncreases(numbers)).toBe(7);
});

test("part2 sample", () => {
  expect(countWindowIncreases(numbers)).toBe(5);
});