const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { mongoose } = require("./database");

const app = express();

//Ajustes
app.set("port", process.env.PORT || 3000); // el S.O proporciona un numero de puerto sino utiliza el 3000
app.use(morgan("dev"));
app.use(express.json());

//Rutas
app.use("/api", require("./rutas/rutas"));

//Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

/*
app.listen(3000, function () {
  console.log("servidor iniciado puerto 3000");
});
*/

app.listen(app.get("port"), function () {
  console.log("servidor iniciado puerto " + app.get("port"));
});
