const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Entertain extends Model { };

Entertain.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, { sequelize, modelName: 'entertain' });


module.exports = Entertain;
