"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Songs",
      [
        {
          title: "From The Hips",
          genre: "rock",
          creatorId: 2,
          songUrl: "https://open.spotify.com/track/0MJdJaOstnyoXEMMnLReun",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Songs", null, {});
  },
};
