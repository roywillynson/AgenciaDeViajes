const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Testimoniales = db.define(
    "testimoniales",
    {
        nombre: DataTypes.STRING,
        correo: DataTypes.STRING,
        mensaje: DataTypes.STRING,
    },
    {
        timestamps: false,
    }
);

module.exports = Testimoniales;
