// VAMOS A necesitar nodemon, express, sequelize, pg, morgan
//npm i express sequelize pg morgan

const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/index");
const errorHandler = require("./src/utils/middlewares/errorHandles");
const setHeaders = require("./src/utils/middlewares/setHeaders");
const { conn } = require("./src/models/index");
const { PORT } = require("./src/utils/config");

const app = express();

// Setear nuestros headers
app.use(express.urlencoded({ extend: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev")); //Guia de lo que esta pasando
app.use(setHeaders);

// Setear rutas
app.use("/", routes);

//Middlewar de control de errores
app.use(errorHandler);

// Server.listen
conn.sync({ force: true }).then(() => {
  console.log("Base de datos conectada.");
  app.listen(PORT, () => {
    console.log(`El servidor esta escuchando el puerto ${PORT}`);
  });
});
