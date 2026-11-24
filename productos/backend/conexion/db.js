
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'segundo_parcial',
    'root',
    'V!enus$',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
)

sequelize.authenticate()
    .then(() => console.log('conexion establecida'))
    .catch((error) => console.log(error))

module.exports = sequelize