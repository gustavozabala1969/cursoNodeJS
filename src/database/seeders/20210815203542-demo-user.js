'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert(
      'Users', [
        { firstName: "Gustavo",
          lastName: "Zabala",
          username:"gustavozabala",
          email: "gustavozabala@arba.gov.ar",
          password: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { firstName: "Oscar",
          lastName: "Zabala",
          username:"oscarzabala",
          email: "oscarabala@arba.gov.ar",
          password: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { firstName: "Micaela",
          lastName: "Zabala",
          username:"micaelazabala",
          email: "micaelazabala@arba.gov.ar",
          password: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { firstName: "Sofia",
          lastName: "Zabala",
          username:"sofiazabala",
          email: "gustavozabala@arba.gov.ar",
          password: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { firstName: "Claudia",
          lastName: "Zabala",
          username:"claudiazabala",
          email: "gustavozabala@arba.gov.ar",
          password: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], 
    {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
