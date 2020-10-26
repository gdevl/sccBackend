'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    songId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    commentText: DataTypes.STRING,
    timeStamp: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};