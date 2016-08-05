'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('burgers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        },
      burgerName: {
        allowNull: false,
        type: Sequelize.STRING
        },
      devoured: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('burgers');
  }
};