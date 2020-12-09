// Importar express y otras cosas
const express = require("express");
const path = require("path");
const routes = require("./routes");
const configs = require("./config");

// DataBase initialize
const db = require("./config/database");
db.authenticate()
    .then(() => console.log("Conectada"))
    .catch((err) => console.log(err));

// configurar express
const server = express();
const port = process.env.PORT || 4500; // default port
const host = process.env.HOST || "0.0.0.0"; // default host

// Configurar el view engine y definir path de las views
server.set("view engine", "pug");
server.set("views", path.join(__dirname, "views"));

// static files
server.use(express.static("public"));

// config
const config = configs[server.get("env")];

// locals
server.locals.website = config.name;

/*************************************
 *          MiddleWares
 *************************************/
// año
server.use((req, res, next) => {
    // Fecha
    const currentYear = new Date().getFullYear();

    //Obtener year
    res.locals.fullYear = currentYear;

    return next();
});
// Para los formularios
server.use(express.urlencoded({ extended: true }));

/****************************
 *          Rutas
 ****************************/
server.use("/", routes()); // Cargar rutas

/****************************
 *       Conexion
 ****************************/
server.listen(port, host, () => console.log(`Escuchando en el puerto ${port}`));
