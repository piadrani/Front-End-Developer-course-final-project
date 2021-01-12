const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();

const viewsPath = path.join(__dirname, "templates/views");
const partialPath = path.join(__dirname, "templates/partials");
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

app.get("", (req, res) => {
  res.render("index.hbs");
});

app.get("/inicio", (req, res) => {
  res.render("index.hbs");
});

app.get("/contacto", (req, res) => {
  res.render("contacto.hbs");
});

app.get("/nosotros", (req, res) => {
  res.render("nosotros.hbs");
});

app.get("/terminos", (req, res) => {
  res.render("terminos.hbs");
});

app.get("/politicas", (req, res) => {
  res.render("politicas.hbs");
});

app.get("/error404", (req, res) => {
  res.render("error404.hbs");
});

const getSong = require("./public/js/service");


app.listen(3000, () => {
  console.log("La conexión fue exitosa");
});
