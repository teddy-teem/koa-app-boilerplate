#!/usr/bin/env node

const { createJsApp } = require("./AppController/jsApp");
const { createTsApp } = require("./AppController/tsApp");
const { validateAppName, isNameAvailable } = require("./helper/validate");

const appName = process.argv[2];
if (appName && validateAppName(appName) && isNameAvailable(appName)) {
  console.log(
    `<<<<<<< ${appName} already exist in current directory, use different name >>>>>>>>`
  );
  console.log("-----------npx koa-app-boilerplate appName----------");
} else if (
  validateAppName(appName) &&
  String(process.argv[3]).toLocaleLowerCase() !== "ts"
) {
  createJsApp(appName);
} else if (
  validateAppName(appName) &&
  String(process.argv[3]).toLocaleLowerCase() === "ts"
) {
  createTsApp(appName);
} else {
  console.log("<<<<<<< 'appName' Only alphabates, hyphen(-), underscore(_) are allowed >>>>>>>>");
  console.log("----------- npx koa-app-boilerplate appName ----------");
}
