'use strict';

var _require = require('@faker-js/faker'),
    faker = _require.faker;
/** @type {import('sequelize-cli').Migration} */


module.exports = {
  up: function up(queryInterface, Sequelize) {
    var sites;
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /**
             * Add seed commands here.
             *
             * Example:
             * await queryInterface.bulkInsert('People', [{
             *   name: 'John Doe',
             *   isBetaMember: false
             * }], {});
            */
            sites = Array(25).fill(0).map(function (v, idx) {
              return {
                // id: idx,
                name: faker.company.name(),
                url: faker.internet.url(),
                user: faker.internet.userName(),
                password: faker.internet.password(),
                description: faker.lorem.paragraphs(5),
                categoryId: faker.datatype.number({
                  min: 0,
                  max: 10
                }),
                createdAt: new Date(),
                updatedAt: new Date()
              };
            });
            _context.next = 3;
            return regeneratorRuntime.awrap(queryInterface.bulkInsert('Sites', sites));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function down$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};