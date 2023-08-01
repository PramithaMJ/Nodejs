import { log } from "node:console";
import { appendFileSync, readFileSync, rmSync, writeFileSync } from "node:fs";
// import { readFile, rm, writeFile } from "node:fs";
import { readFile, rmdir, writeFile, appendFile, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Promise API
readFile(join(__dirname, "read.txt"), {
  encoding: "utf-8",
})
  .then((data) => log(data))
  .catch((err) => log(err));

const WriteFun = async (data) => {
  try {
    const res = await writeFile(join(__dirname, "write2.js"), data, {
      encoding: "utf-8",
    });
    log(res);
  } catch (err) {
    log(err);
  }
};

WriteFun(`
const a='pmj';
console.log('a');
`);

appendFile(
  join(__dirname, "write1.js"),
  `
        const c= "mihiranaga";
        console.log(c);
`
)
  .then((res) => log(res))
  .catch((err) => log(err));

rm(join(__dirname, "read.txt"))
  .then((res) => log(res))
  .catch((err) => log(err));

//Sync API
const data = readFileSync(join(__dirname, "write.js"), {
  encoding: "utf-8",
});
log(data);

writeFileSync(
  join(__dirname, "write.js"),
  `
const c ='upul'
console.log(c);
`
);

appendFileSync(
  join(__dirname),
  "write.js",
  `
console.log(c);
`
);

rmSync(join(__dirname, "write.js"));
//callback api

// log(__filename);
// log(__dirname);

// readFile(
//   join(__dirname, "read.txt"),
//   {
//     encoding: "utf-8",
//   },
//   (err, data) => {
//     if (!err) {
//       log(data);
//     }
//   }
// );

// writeFile(
//   join(__dirname, "write1.js"),
//   `
//         const a = 'pramitha';
//         const c = [1,2,3,4,5];

//         console.log(a);
//         console.log(c);
// `,
//   (err) => {
//     if (err) {
//       log(err);
//     }
//   }
// );

// rm(join(__dirname, "write.txt"), (err) => !err && log("file is deleted"));
