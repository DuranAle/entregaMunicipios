const express = require("express");
const router = express.Router();
const Entrega = require("../modelo/entrega");

router.get("/", async (req, res) => {
  const entregas = await Entrega.find();
  console.log(entregas);
  res.json({
    entregas: entregas,
  });
});

router.get("/:id", async (req, res) => {
  const entrega = await Entrega.findById(req.params.id);
  res.json({
    entrega: entrega,
  });
});

router.post("/", async (req, res) => {
  const { nombre } = req.body;
  const entrega = new Entrega({
    /** SI DA ERROR AGREGAR LA a A ENTREGA **/ nombre: nombre,
  });
  await entrega.save();
  res.json({
    status: "entrega guardada",
  });
});

/** PARA MODIFICAR UNA ENTREGA UTILIZA EL id  **/
router.put("/:id", async (req, res) => {
  const { nombre } = req.body;
  const entregaModificada = {
    nombre: nombre,
  };
  await Entrega.findByIdAndUpdate(req.params.id, entregaModificada, {
    useFindAndModify: false,
  });
  res.json({
    status: "entrega actualizada",
  });
});

router.delete("/:id", async (req, res) => {
  await Entrega.findByIdAndRemove(req.params.id, { useFindAndModify: false });
  res.json({
    status: "entrega eliminada",
  });
});

module.exports = router;
