const controller = {
  registerGet: (req, res) => {
    res.render("register");
  },
  registerGet2: (req, res) => {
    const persona = req.query;

    res.render("mostrar", { persona: persona });
  },
  registerPost: (req, res) => {
    const persona = req.body;

    res.render("mostrar", { persona: persona });
  },
};

module.exports = controller;
