const uuid = require("uuid/v4");
const fs = require("fs");

function writeJSONFile(filename, content) {
  console.log(filename, content);
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`changes saved to file ${filename}....`);
}
function makeID() {
  return uuid.generate();
}

module.exports = {
  makeID,
  writeJSONFile
};
