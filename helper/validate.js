const fs = require('fs');
exports.validateAppName = (name) => {
    if(!name )
        return false;
    var regex = /^[a-zA-Z\-\_]{1,30}$/;
    return regex.test(name);
}

exports.isNameAvailable = repo => {
    let allDir = fs
      .readdirSync(`${__dirname}/../`, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name.toLocaleLowerCase());
    return !!allDir.includes(repo.toLocaleLowerCase());
  };