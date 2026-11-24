
const { DataTypes } = require('sequelize')
const sequelize = require('../conexion/db')

const Products = sequelize.define('products', {
    partNumber: {
        type: DataTypes.TEXT
    },
    productType: {
        type: DataTypes.TEXT
    },
    categoryCode: {
        type: DataTypes.TEXT
    },
    brandCode: {
        type: DataTypes.TEXT
    },
    familyCode: {
        type: DataTypes.TEXT
    },
    lineCode: {
        type: DataTypes.TEXT
    },
    productSegmentCode: {
        type: DataTypes.TEXT
    },
    status: {
        type: DataTypes.TEXT
    },
    value: {
        type: DataTypes.DOUBLE
    },
    valueCurrency: {
        type: DataTypes.TEXT
    },
    defaultQuantityUnits: {
        type: DataTypes.TEXT
    },
    name: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    },
    plannerCode: {
        type: DataTypes.TEXT
    },
    sourceLink: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'products',
    timestamps: false
})

Products.removeAttribute('id')

module.exports = Products