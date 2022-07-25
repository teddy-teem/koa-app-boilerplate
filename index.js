#!/usr/bin/env node

const execSync = require("child_process").execSync;
const wirteData = require("./wirteData")
const arg = process.argv;
console.log("I am on the way  :-p");
execSync(`mkdir ${arg[2]}`);
execSync(`mkdir src`, { cwd:  `${arg[2]}` });
execSync(`mkdir controllers`, { cwd: `${arg[2]}/src` });
execSync(`mkdir models`, { cwd: `${arg[2]}/src` });
execSync(`mkdir variables`, { cwd: `${arg[2]}/src` });
execSync(`touch healthController.js`,{ cwd:  `${arg[2]}/src/controllers` });
wirteData.writeController(`${arg[2]}/src/controllers/healthController.js`);
execSync(`touch index.js`, { cwd: `${arg[2]}/src/variables` });
wirteData.writeVarIndex(`${arg[2]}/src/variables/index.js`);
execSync(`touch index.js`, { cwd: `${arg[2]}/src` } );
wirteData.writeIndex(`${arg[2]}/src/index.js`);
execSync(`touch routes.js`, { cwd: `${arg[2]}/src` });
wirteData.writeRoute(`${arg[2]}/src/routes.js`);
execSync(`touch .env`, { cwd: `${arg[2]}/src` });
wirteData.writeEnv(`${arg[2]}/src/.env`,  arg[2]);
execSync(`touch .gitignore`, {cwd: `${arg[2]}`});
wirteData.writeGitignore(`${arg[2]}/.gitignore`);
execSync(`git init`, {cwd: `${arg[2]}`});
execSync(`npm init -y`, { cwd: `${arg[2]}/src` });
console.log("Wait a bit, installing some commonly used node module in server side.....");
execSync(`npm i koa koa-body koa-router dotenv axios multer memory-cache`, { cwd: `${arg[2]}/src` });
console.log("Go to src file, run node index.js");
console.log("Make sure you can have response of http://localhost:8081/health route");
console.log(">=====Have some more bugs, best wishes======<");

// execSync(`node index.js`,  { cwd: `${arg[2]}/src` });