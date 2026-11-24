const express = require('express')
const Employees = require('./modelos/Employees')
const Products = require('./modelos/Products')
const sequelize = require('./conexion/db')
const cors = require('cors')

const app = express() 

app.use(express.json())
app.use(cors())


// la ruta
// metodo (GET, post, put, delelt,e patch)
// entrada - salida request, reponse
// codigo respuesta

//select SUM(SALARY) as 'Suma Salario por Depto',department_id from employees group by department_id;
app.get('/sum-salary-by-depto', async (req, resp) => {


    try {

        const result = await Employees.findAll({

            attributes: [
                'department_id',
                [sequelize.fn('SUM', sequelize.col('SALARY')), 'total_salario']
            ],
            group: ['department_id']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }

    } catch (error) {

        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

//select count(*), department_id,job_id from employees group by department_id, job_id;

app.get('/count-by-deparment-job', async (req, resp) => {


    try {

        const result = await Employees.findAll({

            attributes: [
                'department_id',
                'job_id',
                [sequelize.fn('COUNT', sequelize.col('*')), 'total_count']
            ],
            group: ['department_id', 'job_id']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }

    } catch (error) {

        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});
// select MAX(SALARY),department_id from employees where department_id = 50 group by department_id

app.get('/max-salary-by-deparment/:deparmentId', async (req, resp) => {


    try {

        const result = await Employees.findAll({

            attributes: [
                'department_id',
                [sequelize.fn('MAX', sequelize.col('SALARY')), 'max_salary']
            ],
            where: { department_id: req.params.deparmentId },
            group: ['department_id']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }

    } catch (error) {

        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});


app.get('/count-products-by-currency', async (req, resp) => {

    try {

        const result = await Products.findAll({

            attributes: [
                'valueCurrency',
                [sequelize.fn('COUNT', sequelize.col('*')), 'cantidadProductos']
            ],
            group: ['valueCurrency']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }

    } catch (error) {

        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});


 // Obtener el valor total por tipo de producto
app.get('/total-products-by-type', async (req, resp) => {

    try {

        const result = await Products.findAll({

            attributes: [
                'productType',
                [sequelize.fn('SUM', sequelize.col('value')), 'valorTotal']
            ],
            group: ['productType']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }

    } catch (error) {

        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});


 // Obtener promedio y cantidad de productos por línea
app.get('/products-summary-by-line', async (req, resp) => {

    try {

        const result = await Products.findAll({

            attributes: [
                'lineCode',
                [sequelize.fn('AVG', sequelize.col('value')), 'valorPromedio'],
                [sequelize.fn('COUNT', sequelize.col('*')), 'cantidadProductos']
            ],
            group: ['lineCode']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }

    } catch (error) {

        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});


app.listen(5000, () => {
    console.log('ejecutando backend')
})