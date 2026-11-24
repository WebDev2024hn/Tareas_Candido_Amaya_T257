
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
import { fetchProductsSummaryByLine } from '../../Servicios/api'
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
            label: 'Valor Promedio',
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
                text: 'Valor Promedio de Productos por Línea',
            },
        },
    })

    useEffect(() => {
        fetchProductsSummaryByLine().then((data) => {
            const labels = data.map((item: any) => item.lineCode || 'Sin línea');
            const valores = data.map((item: any) => Number(item.valorPromedio));

            setCharData({
                labels: labels,
                datasets: [{
                    label: 'Valor Promedio',
                    data: valores,
                }]
            })
        })
    }, [])

    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-5'>Promedio de Productos por Línea</h1>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <Bar data={charData} options={options}></Bar>
                </div>
            </div>
        </div>
    )
}