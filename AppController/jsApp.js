const execSync = require("child_process").execSync;
const wirteData = require("../helper/wirteData");
const fs = require("fs");

exports.createJsApp = (name) => {
  console.log("I am on the way  :-p");
  fs.mkdirSync(`${name}`);
  fs.mkdirSync(`./${name}/src`);
  fs.mkdirSync(`./${name}/src/controllers`);
  fs.mkdirSync(`./${name}/src/models`);
  fs.mkdirSync(`./${name}/src/variables`);
  wirteData.writeController(`${name}/src/controllers/healthController.js`);
  wirteData.writeVarIndex(`${name}/src/variables/index.js`);
  wirteData.writeIndex(`${name}/src/index.js`);
  wirteData.writeRoute(`${name}/src/routes.js`);
  wirteData.writeEnv(`${name}/src/.env`, name);
  wirteData.writeGitignore(`${name}/.gitignore`);
  execSync(`git init`, { cwd: `${name}` });
  execSync(`npm init -y`, { cwd: `${name}/src` });
  console.log(
    "Wait a bit, installing some commonly used node module in server side....."
  );
  execSync(`npm i koa koa-body koa-router dotenv axios multer memory-cache`, {
    cwd: `${name}/src`,
  });
  console.log("Go to src file, run node index.js");
  console.log(
    "Make sure you can have response of http://localhost:8081/health route"
  );
  console.log(">=====Have some more bugs, best wishes======<");
};
