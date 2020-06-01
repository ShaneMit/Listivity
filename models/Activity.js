const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Activity extends Model { };

Activity.init({
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
  },
  {
    timestamps: false
  })
}, { sequelize, modelName: 'activity' });


module.exports = Activity;
