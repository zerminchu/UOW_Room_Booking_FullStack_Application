const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    console.log(file);
    const module = require(path.join(__dirname, file));
    db[model.name] = model;
  });
