import { calc, calc2 } from "../solutions/2";

const input: string[] = [
  'forward 5',
  'down 5',
  'forward 8',
  'up 3',
  'down 8',
  'forward 2',
]

test("part1 sample", () => {
  expect(calc(input)).toBe(150);
});

test("part2 sample", () => {
  expect(calc2(input)).toBe(900);
});
