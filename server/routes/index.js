// Model
const Viajes = require("../models/Viajes.model");

// Controllers
const inicioController = require("../controllers/inicio.controller");
const nosotrosController = require("../controllers/nosotros.controller");
const viajesController = require("../controllers/viajes.controller");
const testimonialesController = require("../controllers/testimoniales.controller");

module.exports = function () {
    // Enrutador
    const { Router } = require("express");
    const router = Router();

    // Rutas
    router.get("/", inicioController.renderPage);

    router.get("/nosotros", nosotrosController.renderPage);

    router.get("/viajes", viajesController.renderPage);

    router.get("/viajes/:id", viajesController.renderPageByID);

    router.get("/testimoniales", testimonialesController.renderPage);

    router.post("/testimoniales", testimonialesController.addTestimonial);

    //return router
    return router;
};
