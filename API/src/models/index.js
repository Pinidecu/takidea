//Inicializamos sequelize y hacemos las relaciones

const {Sequelize} = require ('sequelize');
const {
  dbUser,
  dbName,
  dbPort,
  dbHost,
  dbPassword,
} = require("../utils/config/index");

const ProductsFactory = require('./products');
const TablesFactory = require("./tables");

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`);

const Product = ProductsFactory(sequelize);
const Table = TablesFactory(sequelize);

//Relaciones

Table.hasMany(Product);

module.exports = {
    conn:sequelize,
    Product,
    Table,
}