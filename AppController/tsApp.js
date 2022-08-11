const execSync = require("child_process").execSync;
const wirteData = require("../helper/wirteData");

exports.createTsApp = (name) => {
  console.log("I am on the way  :-p");
  execSync(`mkdir ${name}`);
  execSync(`mkdir src`, { cwd: `${name}` });
  execSync(`mkdir controllers`, { cwd: `${name}/src` });
  execSync(`mkdir models`, { cwd: `${name}/src` });
  execSync(`mkdir variables`, { cwd: `${name}/src` });
  execSync(`touch health.ts`, { cwd: `${name}/src/controllers` });
  wirteData.writeController(`${name}/src/controllers/health.ts`, "ts");
  execSync(`touch index.ts`, { cwd: `${name}/src/variables` });
  wirteData.writeVarIndex(`${name}/src/variables/index.ts`,"ts");
  execSync(`touch index.ts`, { cwd: `${name}/src` });
  wirteData.writeIndex(`${name}/src/index.ts`, "ts");
  execSync(`touch routes.ts`, { cwd: `${name}/src` });
  wirteData.writeRoute(`${name}/src/routes.ts`, "ts");
  execSync(`touch .env`, { cwd: `${name}/src` });
  wirteData.writeEnv(`${name}/src/.env`, name);
  execSync(`touch tsconfig.json`, { cwd: `${name}/src` });
  wirteData.writeTsconfigJson(`${name}/src/tsconfig.json`, name, "ts");
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
