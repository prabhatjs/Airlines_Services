'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER

      },
      flightnumber: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true

      },
      airplaneid: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Airplanes',//
          key:'id'
        },
        onDelete:'CASCADE'
      },
      departureAirportId: {
        type: Sequelize.STRING,
        allowNull:false,
        references:{//create relation between two tables
          model:'Airports',
          key:'Acode'
        },
        onDelete:'CASCADE'
      },
      //ARRIVAL AIRPORT ID REFRENCE HOGI AIRPORTS SE AIRPORT 
      arrivalAirportId: {
        type: Sequelize.STRING,
        allowNull:false,
        references:{
         model:'Airports',
          key:'Acode'//airport code which airport arrival of airplane
        },
        onDelete:'CASCADE'
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull:false
      },
      arrivalDate: {
        type: Sequelize.DATE,
        allowNull:false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      boardingGate: {
        type: Sequelize.STRING,
        allowNull:false
      },
      totalseats: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};