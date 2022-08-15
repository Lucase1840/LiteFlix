require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DIALECT } = process.env;

let sequelize;
if (process.env.NODE_ENV !== 'production') {
  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    port: DB_PORT,
    host: DB_HOST,
    dialect: DB_DIALECT,
    logging: false
  });
} else {
  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    port: DB_PORT,
    host: DB_HOST,
    dialect: DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nw error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  });
}

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);

let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
