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
      // define association here
      this.belongsTo(models.Airplanes,{
        foreignKey:'airplaneid',
         onDelete:'CASCADE'

      });
      //2nd foregin key
      this.belongsTo(models.Airports,{
        foreignKey:'departureAirportId',
        onDelete:'CASCADE'
      });
       //2nd foregin key
       this.belongsTo(models.Airports,{
        foreignKey:'arrivalAirportId',
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