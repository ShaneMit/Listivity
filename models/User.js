const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class User extends Model { };

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'user' });


module.exports = User;
