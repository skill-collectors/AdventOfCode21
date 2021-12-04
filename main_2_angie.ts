import { readFile } from "fs/promises";
import { resolve } from "path";

// Read File:
(async () => {
  console.log("started");
  const res_path = resolve("./inputs/2_alarson.txt");
  const content = await readFile(res_path, { encoding: "utf-8" });

  // split file on regix for return or new lines
  const data = content.split(/\r?\n/);
  // need to split data in file to action and unit
  const directions = data.map((x) => {
    // Use regex capture group to get action and unit. action is match[1], unit is match[2]
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


  // loop through each line in the file
    for (let row=1; row < data.length; row++){

      switch (action[row]) {
        case "forward":
          horizontal += unit[row]);
          break;
        case "down":
          depth += unit[row];
          break;
        case "up":
          depth -= unit[row];
          break;

        default:
          console.warn("Unknown match:" + match.toString());
          break;
      }
  }

  //console.log(depth[0] + horizontal[0]);
  let final = horizontal * depth;
  console.log(`final course: ${final} `);
})();
