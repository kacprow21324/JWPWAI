import uniqueString from 'unique-string';

const fs = require("fs");
const data = fs.readFileSync('package.json');

console.log(uniqueString());
console.log("\ngenerowanie unikatowego losowego napisu.");