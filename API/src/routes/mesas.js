const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Soy la ruta MESAS");
});

module.exports = router;
