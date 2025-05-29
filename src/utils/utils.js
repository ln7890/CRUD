const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");
const path = join("src/data/students.json");
const readData = () => {
  return JSON.parse(readFileSync(path, "utf-8"));
};

const writeData = (data) => {
  writeFileSync(path, JSON.stringify(data, null, 2));
};

module.exports = {
  readData,
  writeData,
};
