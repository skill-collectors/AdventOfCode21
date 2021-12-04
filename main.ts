import { readFile } from "fs/promises";
import { resolve } from "path";

// Read File:
(async () => {
  console.log("started");
  const res_path = resolve("./inputs/1_alarson.txt");
  const content = await readFile(res_path, { encoding: "utf-8" });

  // split file on regix for return or new lines
  const data = content.split(/\r?\n/);

  let increasing = 0;
  for (let i: number = 1; i < data.length; i++) {
    if (parseInt(data[i]) > parseInt(data[i - 1])) {
      console.log(
        `i: ${i}  contentArray[i]: ${data[i]}  contentArray[i-1]: ${
          data[i - 1]
        }`
      );
      increasing++;
    }
  }

  console.log(data[0]);
  console.log(`number of increases: ${increasing} `);
})();
