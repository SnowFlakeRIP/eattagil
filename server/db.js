const {Sequelize} = require('sequelize')
module.exports = new Sequelize(
    'eat',
    'root',
    'root',
    {
        dialect: 'postgres',
        host: '45.130.8.125',
        port: 6432
    }
)