const listaPlatos = [
  {
    id: 1,
    titulo: "Carpaccio fresco",
    descripcionCorta: "Entrada Carpaccio de salmón con cítricos",
    descripcionDetallada:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    precio: "65.50",
    img: "Carpaccio-de-salmon.jpg",
  },
  {
    id: 2,
    titulo: "Risotto de berenjena",
    descripcionCorta: "Risotto de berenjena y queso de cabra",
    descripcionDetallada: "",
    precio: "47.00",
    img: "Risotto-berenjena-queso-cabra.jpg",
  },
  {
    id: 3,
    titulo: "Mousse de arroz",
    descripcionCorta: "Mousse de arroz con leche y aroma de azahar",
    descripcionDetallada: "",
    precio: "27.50",
    img: "Mousse-de-arroz-con-leche.jpg",
  },
  {
    id: 4,
    titulo: "Espárragos blancos",
    descripcionCorta:
      "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    descripcionDetallada: "",
    precio: "37.50",
    img: "esparragos.png",
  },
];

const controller = {
  index: (req, res) => {
    res.render("index", { listaPlatos: listaPlatos });
  },
  menuDetails: (req, res) => {
    const idPlato = req.params.id;
    listaPlatos.forEach((plato) => {
      if (plato.id == idPlato) {
        res.render("detallemenu", { plato: plato });
      }
    });
  },
};

module.exports = controller;
