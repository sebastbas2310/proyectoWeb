// models/worker.js
'use strict';
const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Worker extends Model {
    static associate(models) {

    }
  }

  Worker.init(
    {
      worker_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      worker_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      worker_rol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salary: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'worker',
      tableName: 'worker', // Asegúrate de que el nombre de la tabla coincida con tu base de datos
      timestamps: true,
    }
  );

  return Worker;
};
