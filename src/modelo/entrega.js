const mongoose = require("mongoose");
const { Schema } = mongoose;

const EntregaSchema = new Schema({
  nombreMuni: { type: String, require: true },
  localidad: { type: String, require: true },
  zona: { type: String, require: true },
}); /** VER QUE MAS LE PONGO ACA, O EL FORMATO Q LE PONGO */

module.exports = mongoose.model("Entrega", EntregaSchema);
