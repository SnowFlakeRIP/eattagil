const {Sequelize} = require('sequelize')
module.exports = new Sequelize(
    'eat',
    'postgres',
    '12345678',
    {
        dialect: 'postgres',
        host: '192.168.0.102',
        port: 5432
    }
)