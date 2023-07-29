import os from "node:os"; //get only node package 
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

console.log(os.platform());
console.log(os.version());

console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
