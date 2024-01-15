'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplanes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Airplanes,{
        foreignKey:'airplaneid',
        onDelete:'casecade'
      })
    }
  }
  Airplanes.init({
    modelNo:{
     type: DataTypes.STRING,
     allowNull:false
    },
    cap:{
      type:DataTypes.INTEGER,
      allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'Airplanes',
  });
  return Airplanes;
};

//this is javascript level constraints 