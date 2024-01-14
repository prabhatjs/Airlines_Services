'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //here we deffine the association of one table to another tables javascript levele association-------
    //airports modeles belong to city
    static associate(models) {
    this.belongsTo(models.City,{
      foreignKey:'cityId',
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
    });
    }
  }
  Airport.init({
    name: {
    type:DataTypes.STRING,
    allowNull:false
    },
    Acode:{
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    address:{
      type:DataTypes.STRING,
      allowNull:false
    },
    cityId:{
      type:DataTypes.INTEGER,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};