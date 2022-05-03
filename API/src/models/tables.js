const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define("table", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
    },
  });
};
