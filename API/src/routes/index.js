/*
Vamos a traer las otras rutas
Mi ruta de produtos y mesas

*/
const { Router } = require("express");

const ProductosRoutes = require('./productos');
const MesasRoutes = require("./mesas");

const router = Router();

router.use('/productos', ProductosRoutes);
router.use("/mesas", MesasRoutes);

module.exports = router;
