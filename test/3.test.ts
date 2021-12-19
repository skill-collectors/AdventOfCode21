import { calc, calc2, calcOxygenGeneratorRating, calcCo2ScrubberRating } from "../solutions/3";

const input: string[] = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
]

test("part1 sample", () => {
  expect(calc(input)).toBe(198);
});

test("part2 oxygen generator rating", () => {
  const binary = calcOxygenGeneratorRating(input);
  expect(binary).toBe('10111')
  expect(parseInt(binary, 2)).toBe(23)
});

test("part2 co2 scrubber rating", () => {
  const binary = calcCo2ScrubberRating(input);
  expect(binary).toBe('01010')
  expect(parseInt(binary, 2)).toBe(10)
});

test("part2 sample", () => {
  expect(calc2(input)).toBe(230);
});