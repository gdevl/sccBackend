"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING(50),
        unique: true,
      },
    },
    {}
  );
  Category.associate = function (models) {
    // associations can be defined here
  };
  return Category;
};
