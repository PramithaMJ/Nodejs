import { dirname, join } from "node:path";
import path from "node:path";
import { readFile } from "node:fs";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

readFile(join(__dirname, "myName.txt"), "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// readFile(join(__dirname, "myName.txt"), (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(data.toString());
//   });
