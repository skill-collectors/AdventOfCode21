import { readFile } from "fs/promises";
import { resolve } from "path";
import { readToArray } from "../utilities/utils";


// Prints answer to Day 1 challenges to the console
export const answer = async (file: string) => {
  await calc(file, 1);
  await calc(file, 3);
};

// Calculate the number of increases between depths arraay
const calc = async (input: string, spread: number) => {
  const data = await partitions(input, spread);

  // Overall number of increasing steps
  let increasing = 0;
  for (let i: number = 1; i < data.length; i++) {

    if (data[i] > data[i - 1]) {
      increasing++;
    }
  }

  console.log(`number of increases: ${increasing} `);
};



const partitions = async (input: string, spread: number): Promise<number[]> => {
  const raw = await readToArray(input);

  // convert everything to int types so the math is correct. Silly JavaScript
  const data = raw.map((x) => parseInt(x));

  let results = [];

  for (let i: number = 0; i < data.length; i++) {
    const sum = data
      .slice(i, i + spread) // Depending on how big of a spread to average, take a portion of the array
      .reduce((previous, current) => previous + current); // summate the partition of the array
    results.push(sum); // append to results array, which is returned
  }

  return results;
};
