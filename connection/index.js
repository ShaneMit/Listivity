const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:rootroot1@localhost:3306/activity_db')

module.exports = sequelize