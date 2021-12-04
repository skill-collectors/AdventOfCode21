import { readToArray } from "../utilities/utils";

// Prints answer to challenge to the console
export const answer = async (file: string) => {
  console.log("Part One:");
  await calc(file);
  console.log("----------------------");
  console.log("Part Two:");
  await calc2(file);
};

// Calculate the number of increases between depths arraay
const calc = async (input: string) => {
  const data = await readToArray(input);

  const directions = data.map((x) => {
    // Use regex capture group to get direction and vaule. Direction is match[1], amount is match[2]
    const match = x.match(/([a-zA-Z]+)\s(\d+)/) ?? []; // Make Null-check happy

    let horizontal = 0;
    let depth = 0;

    switch (match[1]) {
      case "forward":
        horizontal = parseInt(match[2]);
        break;
      case "down":
        depth = parseInt(match[2]);
        break;

      case "up":
        depth = parseInt(match[2]) * -1;
        break;

      default:
        console.warn("Unknown match:" + match.toString());
        break;
    }

    return {
      horizontal: horizontal,
      depth: depth,
    };
  });

  const totalDistance = directions
    .map((x) => x.horizontal)
    .reduce((previous, current) => previous + current);
  const totalDepth = directions
    .map((x) => x.depth)
    .reduce((previous, current) => previous + current);

  console.log(`Total Horizontal: ${totalDistance}`);
  console.log(`Total Depth: ${totalDepth}`);
  console.log(`Answer: ${totalDepth * totalDistance}`);
};

// Calculate horizontal distance and depth by aim
const calc2 = async (input: string) => {
  const data = await readToArray(input);

  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  for (let i: number = 0; i < data.length; i++) {
    // Use regex capture group to get direction and vaule. Direction is match[1], amount is match[2]
    const match = data[i].match(/([a-zA-Z]+)\s(\d+)/) ?? []; // Make null-check happy

    switch (match[1]) {
      case "forward":
        horizontal += parseInt(match[2]); // Add to horizonal
        let forward = aim * parseInt(match[2]); // Add to depth. spilt into 2 lines because formatter keeps removing my () on save.. >:[
        depth += forward;
        break;

      case "down":
        aim += parseInt(match[2]);
        break;

      case "up":
        aim -= parseInt(match[2]);
        break;

      default:
        // Catch unknown
        console.warn("Unknown match:" + match.toString());
        break;
    }
  }

  console.log(`Total Horizontal: ${horizontal}`);
  console.log(`Total Depth: ${depth}`);
  console.log(`Answer: ${horizontal * depth}`);
};
