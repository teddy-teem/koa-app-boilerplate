const fs = require('fs');
const temp = require("./temp.json");
const path = require("path");
const { dirname } = require('path');

exports.writeController = (repo)=>{
    fs.writeFileSync(`${repo}`, temp.healthController, );
}
exports.writeIndex = (repo)=>{
    fs.writeFileSync(`${repo}`, temp.index );
}
exports.writeEnv = (repo, fileName)=>{
    fs.writeFileSync(`${repo}`, temp.env+fileName );
}
exports.writeRoute = (repo)=>{
    fs.writeFileSync(`${repo}`, temp.route );
}
exports.writeVarIndex = (repo)=>{
    fs.writeFileSync(`${repo}`, temp.varIndex );
}

exports.writeGitignore = (repo)=>{
    fs.writeFileSync(`${repo}`, temp.gitignore );
}
