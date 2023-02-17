const express = require("express");
const path = require("path");
const app = express();

const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,'public')));

app.use("/", mainRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor levantado en http://localhost:${port}`);
});
