
'use client'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

import React, { useEffect, useState } from 'react'
import { fetchProductsByCurrency } from '../../Servicios/api'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function page() {

    const [charData, setCharData] = useState({
        labels: [] as string[],
        datasets: [{
            label: 'Cantidad de Productos',
            data: [] as number[],
        }]
    })

    const [options, setOptions] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Cantidad de Productos por Moneda',
            },
        },
    })

    useEffect(() => {

        fetchProductsByCurrency().then((data) => {

            const labels = data.map((item: any) => item.valueCurrency);
            const cantidad = data.map((item: any) => Number(item.cantidadProductos));

            setCharData({
                labels: labels,
                datasets: [{
                    label: 'Cantidad de Productos',
                    data: cantidad,
                }]
            })

        })

    }, [])

    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-5'>Productos por Moneda</h1>

            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <Bar data={charData} options={options}></Bar>
                </div>
            </div>
        </div>
    )
}
