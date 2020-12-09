const renderPage = (req, res) => {
    res.render("nosotros", {
        page: "Sobre Nosotros",
    });
};

module.exports = {
    renderPage,
};
