import { readFile } from "fs/promises";
import { resolve } from "path";

// Reads a newline delimited file into an array
// Takes a relative file path
export const readToArray = async (filePath: string): Promise<string[]> => {
  // Resolve Relative path
  const res_path = resolve(filePath);

  // Read file into variable
  const content = await readFile(res_path, { encoding: "utf-8" });

  // Split contents on regex for return or new lines
  return content.split(/\r?\n/);
};
