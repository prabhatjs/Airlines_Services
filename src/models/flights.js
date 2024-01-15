'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     // define foregin key at the time of model creation
      // define association here
      this.belongsTo(models.Airplanes,{
        foreignKey:'id',
        as: 'airplaneDetail',
         onDelete:'CASCADE'
      });
      this.belongsTo(models.Airport,{
        foreignKey:'departureAirportId',
        as: 'Departure_Airport_Detail',
        onDelete:'CASCADE'
      });
       this.belongsTo(models.Airport,{
        foreignKey:'arrivalAirportId',
        as: 'Arrivale_airport_details',
         onDelete:'CASCADE'
      });
    }
  }
  Flights.init({
    flightnumber: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    airplaneid: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    departureAirportId: {
      type:DataTypes.STRING,
      allowNull:false
    },
    arrivalAirportId: {
      type:DataTypes.STRING,
      allowNull:false
    },
    departureTime:{
      type: DataTypes.DATE,
      allowNull:false
    },
    arrivalDate: {
      type:DataTypes.DATE,
      allowNull:false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    boardingGate: {
      type:DataTypes.STRING,
      allowNull:false
    },
    totalseats:{ 
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};