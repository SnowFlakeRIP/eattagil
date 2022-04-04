const {Sequelize} = require('sequelize')
module.exports = new Sequelize(
    'eat',
    'postgres',
    '12345678',
    {
        dialect: 'postgres',
        host: '45.130.8.125',
        port: 6432
    }
)