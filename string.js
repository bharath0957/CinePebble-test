const fs = require("fs");

async function readFile(filename) {
  const data = await fs.promises.readFile(filename, "utf8");
  return data;
}