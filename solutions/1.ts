import { readToArray } from "../utilities/utils";

// Prints answer to challenge to the console
export const answer = async (file: string) => {
  const numbers: number[] = (await readToArray(file)).map(Number);
  console.log(`Part 1: ${countIncreases(numbers)}`);
  console.log(`Part 2: ${countWindowIncreases(numbers)}`);
};

export const countIncreases = (numbers: number[]) => {
  let sum = 0;
  for(let i = 1; i < numbers.length; i++) {
    const cur = numbers[i];
    const prev = numbers[i-1];
    if(cur > prev) {
      sum++;
    }
  }
  return sum;
}

export const countWindowIncreases = (numbers: number[]) => {
  let sum = 0;
  for(let i = 3; i < numbers.length; i++) {
    const cur = numbers[i] + numbers[i-1] + numbers[i-2];
    const prev = numbers[i-1] + numbers[i-2] + numbers[i-3];
    if(cur > prev) {
      sum++;
    }
  }
  return sum;
}