const execSync = require("child_process").execSync;
const fs = require("fs");
const wirteData = require("../helper/wirteData");

exports.createTsApp = (name) => {
  console.log("I am on the way  :-p");
  fs.mkdirSync(`./${name}`);
  fs.mkdirSync(`./${name}/src`);
  fs.mkdirSync(`./${name}/src/controllers`);
  fs.mkdirSync(`./${name}/src/models`);
  fs.mkdirSync(`./${name}/src/variables`)
  wirteData.writeController(`${name}/src/controllers/health.ts`, "ts");
  wirteData.writeVarIndex(`${name}/src/variables/index.ts`,"ts");
  wirteData.writeIndex(`${name}/src/index.ts`, "ts");
  wirteData.writeRoute(`${name}/src/routes.ts`, "ts");
  wirteData.writeEnv(`${name}/src/.env`, name);
  wirteData.writeTsconfigJson(`${name}/src/tsconfig.json`, name, "ts");
  wirteData.writeGitignore(`${name}/.gitignore`);
  execSync(`git init`, { cwd: `${name}` });
  execSync(`npm init -y`, { cwd: `${name}/src` });

  console.log(
    "Wait a bit, installing some commonly used node module in server side....."
  );
  execSync(`npm i koa koa-body koa-router dotenv axios multer memory-cache`, {
    cwd: `${name}/src`,
  });
  execSync(`npm install --save-dev typescript ts-node @types/node @types/koa-router`, {
    cwd: `${name}/src`,
  });
  wirteData.updatePackage(name);
  console.log("Go to src file, run using 'npm start' command  ");
  console.log(
    "Make sure you can have response of http://localhost:8081/health route"
  );
  console.log(">=====Have some more bugs, best wishes======<");
};
