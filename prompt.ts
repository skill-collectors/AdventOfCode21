import { readdirSync } from "fs";
const inputFiles = "./inputs/";
const prompts = require("prompts");

/*
 * Solution Prompt
 *
 * Description: Execute a chosen solution with a chosen input file via the command line!
 *
 * In order to have solutions/inputs automatically added. The following formats are expected:
 *
 *    - input files are in the Inputs directory, and name in the format of <challenge day>_<username>.txt. ex: 1_bburggraff.txt
 *    - solutions are in the solutions directory, and the name of the file is the day number. That file needs to have a function named "answer" which
 *      has 1 parameter. That parameter needs to take a relative filepath. The answer should be returned via the console log in the function.
 */
(async (): Promise<void> => {
  // Get list of files in inputs dir
  const data = readdirSync(inputFiles).map((x) => {
    const c = x.match(/^\d/) ?? ["unknown"];
    const u = x.match(/(?:^\d_)(.+)(?:\.txt)/) ?? ["unknown", "unknown"];

    return {
      challenge: c[0],
      user: u[1],
      file: x,
    };
  });

  // Create array of solved challenges. Remove Duplicates
  const solutions = [...new Set(data.map((x) => x.challenge))];

  // Create new prompts via this cool library: https://github.com/terkelg/prompts
  const response = await prompts([
    {
      type: "select",
      name: "challenge",
      message: "Which coding solution do you wish to execute?",

      // Limit choices to available solutions
      choices: solutions.map((x) => {
        return { title: x, value: x };
      }),
    },
    {
      type: "select",
      name: "input",
      message: "Whose input file do you wish to use?",

      // Limit choices to available files for that chosen solution
      choices: (prev: string) => {
        return data
          .filter((x) => {
            return x.challenge == prev;
          })
          .map((x) => {
            return { title: x.file, value: x.file };
          });
      },
    },
  ]);

  // Dynamically import solution
  const func = await import(`./solutions/${response.challenge}`);

  // Use selected file
  await func.answer(`${inputFiles}${response.input}`);
})();
