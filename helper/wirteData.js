const fs = require("fs");
const temp = require("../temp.json");

exports.writeController = (repo, type = "js") => {
  if (type === "ts") {
    fs.writeFileSync(`${repo}`, temp.ts.health);
  } else {
    fs.writeFileSync(`${repo}`, temp.js.healthController);
  }
};
exports.writeIndex = (repo, type = "js") => {
  if (type === "ts") {
    fs.writeFileSync(`${repo}`, temp.ts.index);
  } else {
    fs.writeFileSync(`${repo}`, temp.js.index);
  }
};
exports.writeEnv = (repo, fileName) => {
  fs.writeFileSync(`${repo}`, temp.common.env + fileName);
};
exports.writeRoute = (repo, type = "js") => {
  if (type === "ts") {
    fs.writeFileSync(`${repo}`, temp.ts.route);
  } else {
    fs.writeFileSync(`${repo}`, temp.js.route);
  }
};
exports.writeVarIndex = (repo, type = "js") => {
  if (type === "ts") {
    fs.writeFileSync(`${repo}`, temp.ts.varIndex);
  } else {
    fs.writeFileSync(`${repo}`, temp.js.varIndex);
  }
};

exports.writeTsconfigJson = (repo, type = "ts") => {
  fs.writeFileSync(`${repo}`, temp.ts.tsconfig);
};

exports.writeGitignore = (repo) => {
  fs.writeFileSync(`${repo}`, temp.common.gitignore);
};

exports.updatePackage = (repo) => {
  const str = `\"start\": \"npx tsc && node ./dist/index\",`;
  const jsonString = fs.readFileSync(`./${repo}/src/package.json`).toString();
  let jsonParsed = JSON.parse(jsonString);
  jsonParsed = {
    ...jsonParsed,
    scripts: {
      build: "npx tsc",
      start: "npx tsc && node ./dist/index",
      test: 'echo "Error: no test specified" && exit 1',
    },
  };
  fs.writeFileSync(`./${repo}/src/package.json`, JSON.stringify(jsonParsed));
};
