const { DataTypes } = require("sequelize");

const db = require("../config/database");

const Viaje = db.define(
    "viaje",
    {
        titulo: DataTypes.STRING,
        precio: DataTypes.STRING,
        fecha_ida: DataTypes.DATE,
        fecha_vuelta: DataTypes.DATE,
        imagen: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        disponibles: DataTypes.STRING,
    },
    {
        timestamps: false,
    }
);

module.exports = Viaje;
