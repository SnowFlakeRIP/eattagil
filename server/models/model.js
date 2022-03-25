const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    proteins: {type: DataTypes.INTEGER},
    fats: {type: DataTypes.INTEGER},
    carbohydrates: {type: DataTypes.INTEGER},
    description: {type: DataTypes.TEXT},
    calories: {type: DataTypes.INTEGER},
    gramms: {type: DataTypes.FLOAT},
    type: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING}
})


module.exports = {
    Product
}

