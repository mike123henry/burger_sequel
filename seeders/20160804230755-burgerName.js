'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('burgers', [{
        burgerName: 'plain',
        devoured: false
      },{
        burgerName: 'Texas Burger',
        devoured: false
        },{
        burgerName: 'Yankee Burger',
        devoured: false
        },{
        burgerName: 'West Coast Burger',
        devoured: false
        },{
        burgerName: 'East Coast Burger',
        devoured: false
        },{
        burgerName: "Yesterday's  Burger",
        devoured: true
        }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('burgers', null, {truncate: true});
  }
};
