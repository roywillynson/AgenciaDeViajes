const Testimonial = require("../models/Testimoniales.model");

const renderPage = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render("testimoniales", {
            page: "Testimoniales",
            testimoniales,
        });
    } catch (error) {
        console.log(error);
    }
};

const addTestimonial = async (req, res) => {
    const { nombre, email, mensaje } = req.body;

    let errores = [];

    if (!nombre.trim()) errores.push({ mensaje: "Debe llenar el nombre" });
    if (!email.trim()) errores.push({ mensaje: "Debe llenar el email" });
    if (!mensaje.trim()) errores.push({ mensaje: "Debe llenar el mensaje" });

    if (errores.length > 0) {
        const testimoniales = await Testimonial.findAll();

        res.render("testimoniales", {
            page: "Testimoniales",
            testimoniales,
            errores,
            nombre,
            email,
            mensaje,
        });
    } else {
        // Crear testimonial
        try {
            await Testimonial.create({
                nombre,
                email,
                mensaje,
            });

            res.redirect("/testimoniales");
        } catch (error) {
            res.render("error", {
                error,
            });
        }
    }
};

module.exports = {
    renderPage,
    addTestimonial,
};
