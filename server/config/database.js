const Sequelize = require("sequelize");
require("dotenv").config();

console.log(process.env);

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
            acquire: 30000,
        },
    }
);
