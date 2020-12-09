const Viaje = require("../models/Viajes.model");
const Testimoniales = require("../models/Testimoniales.model");

const renderPage = async (req, res) => {
    try {
        // Tres primeros viajes
        const [viajes, testimoniales] = await Promise.all([
            Viaje.findAll({ limit: 3 }),
            Testimoniales.findAll({ limit: 3 }),
        ]);

        res.render("index", {
            page: "Inicio",
            className: "home",
            viajes,
            testimoniales,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    renderPage,
};
