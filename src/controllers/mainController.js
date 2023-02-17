const controller = {
  index: (req, res) => {
    res.render("index");
  },
  menuDetails: (req, res) => {
    res.render("detalleMenu");
  },
};

module.exports = controller;
