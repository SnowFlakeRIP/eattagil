const {Sequelize} = require('sequelize')
module.exports = new Sequelize(
    'eat',
    'postgres',
    '12345678',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }
)