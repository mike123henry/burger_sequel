'use strict';
module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define('burgers', {
    burgerName: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  console.log("burgers = "+ burgers);
  return burgers;
};