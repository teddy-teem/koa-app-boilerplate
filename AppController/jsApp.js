const execSync = require("child_process").execSync;
const wirteData = require("../helper/wirteData");

exports.createJsApp = (name) => {
  console.log("I am on the way  :-p");
  execSync(`mkdir ${name}`);
  execSync(`mkdir src`, { cwd: `${name}` });
  execSync(`mkdir controllers`, { cwd: `${name}/src` });
  execSync(`mkdir models`, { cwd: `${name}/src` });
  execSync(`mkdir variables`, { cwd: `${name}/src` });
  execSync(`touch healthController.js`, { cwd: `${name}/src/controllers` });
  wirteData.writeController(`${name}/src/controllers/healthController.js`);
  execSync(`touch index.js`, { cwd: `${name}/src/variables` });
  wirteData.writeVarIndex(`${name}/src/variables/index.js`);
  execSync(`touch index.js`, { cwd: `${name}/src` });
  wirteData.writeIndex(`${name}/src/index.js`);
  execSync(`touch routes.js`, { cwd: `${name}/src` });
  wirteData.writeRoute(`${name}/src/routes.js`);
  execSync(`touch .env`, { cwd: `${name}/src` });
  wirteData.writeEnv(`${name}/src/.env`, name);
  execSync(`touch .gitignore`, { cwd: `${name}` });
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
