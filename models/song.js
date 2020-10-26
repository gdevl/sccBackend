"use strict";

const category = require("./category");
const user = require("./user");

module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    "Song",
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      category: {
        type: DataTypes.INTEGER,
        references: {
          model: category,
        },
      },
      creatorId: {
        type: DataTypes.INTEGER,
        references: {
          model: user,
        },
      },
      songUrl: DataTypes.STRING,
    },
    {}
  );
  Song.associate = function (models) {
    // associations can be defined here
  };
  return Song;
};
