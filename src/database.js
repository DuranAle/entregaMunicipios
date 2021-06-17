const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/entregas";

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("conectado a la base"))
  .catch((err) => console.log(err));

module.exports = mongoose;
