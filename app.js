const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { title: "Pago de Servicios" });
});

app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "Joshua" } });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/menu", (req, res) => {
  res.render("menu");
});

app.listen(5000, () => {
  console.log("conectado");
});

const DisplayData = function (req, res) {
  const url = "https://demo-pago-servicios.herokuapp.com/categorias";
  axios.get(url).then((response) => {
    const idCategoria = response._id;
    res.render("pagoservicio.pug", { idCategoria });
  });
};

// const pug = require("pug");

// // Compile the source code
// const compiledFunction = pug.compileFile("./views/index.pug");

// // Render a set of data
// console.log(compiledFunction());
