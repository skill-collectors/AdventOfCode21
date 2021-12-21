import { readToArray } from "../utilities/utils";

// Prints answer to challenge to the console
export const answer = async (file: string) => {
  const input = await readToArray(file);
  console.log(`Part 1: ${calc(input)}`);
  console.log(`Part 2: ${calc2(input)}`);
};

export const calc = (input: string[]) => {
  let gamma = '';
  let epsilon = '';
  for(let digit = 0; digit < input[0].length; digit++){
    let nZero = 0;
    let nOne = 0;
    for(let line of input) {
      const x = line[digit];
      if(x === '0') nZero++
      if(x === '1') nOne++
    }
    if(nZero > nOne) {
      gamma += '0'
      epsilon += '1'
    } else {
      gamma += '1'
      epsilon += '0'
    }
  }
  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

function mostCommonDigit(input: string[], digit: number) {
  let nZero = 0;
  let nOne = 0;
  for(let line of input) {
      const x = line[digit];
      if(x === '0') nZero++
      if(x === '1') nOne++
  }
  // keep 1 if they are equal
  return nZero > nOne ? '0' : '1'
}

export const calcOxygenGeneratorRating = function(input: string[]) {
  let values = input;
  for(let digit = 0; digit < input[0].length; digit++){
    if(values.length === 1) {
      break;
    }
    const mostCommon = mostCommonDigit(values, digit)
    values = values.filter(value => value[digit] === mostCommon);
  }
  return values[0];
}

export const calcCo2ScrubberRating = function(input: string[]) {
  let values = input;
  for(let digit = 0; digit < input[0].length; digit++){
    if(values.length === 1) {
      break;
    }
    const mostCommon = mostCommonDigit(values, digit)
    const leastCommon = mostCommon === '0' ? '1' : '0'
    values = values.filter(value => value[digit] === leastCommon);
  }
  return values[0];
}

export const calc2 = function(input: string[]) {
  const oxygenGeneratorRating = parseInt(calcOxygenGeneratorRating(input), 2)
  const co2ScrubberRating = parseInt(calcCo2ScrubberRating(input), 2)
  return oxygenGeneratorRating * co2ScrubberRating;
}
