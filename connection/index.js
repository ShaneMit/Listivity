const Sequelize = require('sequelize')

const sequelize = new Sequelize(mysql.createConnection(process.env.JAWSDB_URL || process.env.LOCAL_URL))

module.exports = sequelize
