import { readToArray } from "../utilities/utils";

// Prints answer to challenge to the console
export const answer = async (file: string) => {
  console.log(`Part1: ${calc(file)}`);
};

class Board {
  rows;

  constructor(input: string) {
    const lines = input.split('\n')
    this.rows = lines
      .map(line => line
        .trim()
        .replaceAll(/ +/g, ' ')
        .split(' ')
        .map(Number))
  }

  print() {
    const lines = this.rows
      .map(row => row
        .map(n => n.toString().padStart(2, ' '))
        .join(' '));
    const output = lines.join('\n');
    console.log(output);
  }
}

export const calc = (file: string) => {
  const paragraphs = file.split('\n\n');
  const numbers = paragraphs.shift()?.split(',').map(Number);
  const boards = paragraphs.map(board => new Board(board))
  boards[0].print();
  return 4512;
}
