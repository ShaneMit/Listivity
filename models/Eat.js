const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Eat extends Model { };

Eat.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cuisine: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, { sequelize, modelName: 'eat' });


module.exports = Eat;
