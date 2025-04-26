'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plate extends Model {
    static associate(models) {
      // define association here
     // Plate.hasMany(models.Order, { foreignKey: "plateFk", as: "plate" });

    }
  }
  Plate.init({
    plate_id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
  },
  plate_name:{
      type: DataTypes.STRING,
      allowNull:false
  },
  plate_desc:{
      type: DataTypes.STRING,
      allowNull:false
  },
  price:{ 
      type: DataTypes.FLOAT(10,2),
      allowNull:false
  },
  plate_img:{
      type: DataTypes.STRING,
      allowNull:false
  },
  plate_cat:{ 
      type: DataTypes.STRING,
      allowNull:false
  },
  ingredients:{ 
      type: DataTypes.STRING,
      allowNull:false
  },
  is_stock : {
      type: DataTypes.BOOLEAN
  }
  }, {
    sequelize,
    modelName: 'Plate',
    tableName: "Plate",
    timestamps: true,
  });
  return Plate;
};