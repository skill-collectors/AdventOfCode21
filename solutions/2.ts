import { readToArray } from "../utilities/utils";

// Prints answer to challenge to the console
export const answer = async (file: string) => {
  const input = await readToArray(file);
  console.log(`Part 1: ${calc(input)}`);
  console.log(`Part 2: ${calc2(input)}`);
};

export const calc = (input: string[]) => {
  let depth = 0;
  let pos = 0;
  for(let line of input) {
    const [command, n] = line.split(' ')
    switch(command) {
      case('forward'):
        pos+=Number(n);
        break;
      case('down'):
        depth+=Number(n);
        break;
      case('up'):
        depth-=Number(n);
        break;
      default:
        throw new Error(`Unknown command: ${line}`)
    }
  }
  return depth * pos;
}

export const calc2 = (input: string[]) => {
  let aim = 0;
  let depth = 0;
  let pos = 0;
  for(let line of input) {
    const [command, n] = line.split(' ')
    switch(command) {
      case('forward'):
        pos+=Number(n);
        depth+=aim * Number(n)
        break;
      case('down'):
        aim+=Number(n);
        break;
      case('up'):
        aim-=Number(n);
        break;
      default:
        throw new Error(`Unknown command: ${line}`)
    }
  }
  return depth * pos;
}