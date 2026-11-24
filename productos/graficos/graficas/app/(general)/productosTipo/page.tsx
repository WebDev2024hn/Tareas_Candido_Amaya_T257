
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
import { fetchTotalProductsByType } from '../../Servicios/api'
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
            label: 'Valor Total',
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
                text: 'Valor Total de Productos por Tipo',
            },
        },
    })

    useEffect(() => {
        fetchTotalProductsByType().then((data) => {
            const labels = data.map((item: any) => item.productType);
            const valores = data.map((item: any) => Number(item.valorTotal));

            setCharData({
                labels: labels,
                datasets: [{
                    label: 'Valor Total',
                    data: valores,
                }]
            })
        })
    }, [])

    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-5'>Valor de Productos por Tipo</h1>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <Bar data={charData} options={options}></Bar>
                </div>
            </div>
        </div>
    )
}
