const Viajes = require("../models/Viajes.model");

const renderPage = (req, res) => {
    Viajes.findAll().then((viajes) =>
        res
            .render("viajes", {
                page: "Proximamente viajes",
                viajes,
            })
            .catch((error) => console.log(error))
    );
};

const renderPageByID = (req, res) => {
    Viajes.findByPk(req.params.id).then((viaje) =>
        res
            .render("viaje", {
                viaje,
            })
            .catch((error) => console.log(error))
    );
};

module.exports = {
    renderPage,
    renderPageByID,
};
