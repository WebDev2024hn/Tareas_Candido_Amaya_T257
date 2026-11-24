'use client'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import React, { useEffect, useState } from 'react'
import { fetchSumaSalario } from '../../Servicios/api'
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
            data: [] as any[],
            backgroundColor: [] as any, // valores de color para cada barra
        }]

    })


    const [options, setOptions] = useState(
        {
            indexAxis: 'y' as const,
            elements: {
                bar: {
                    borderWidth: 2,
                },
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'right' as const,
                },
                title: {
                    display: true,
                    text: 'Chart.js Horizontal Bar Chart',
                },
            },
        }
    )

    useEffect(() => {

        fetchSumaSalario().then((data) => {

            const labels = data.map((item: any) => item.department_id);
            const salario = data.map((item: any) => parseInt(item.total_salario));

            setCharData({
                labels: labels,
                datasets: [{
                    data: salario,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                }]
            })

        })


    }, [])



    return (

        <div className='container mt-5'>
            <h1 className='text-center mb-5'>Suma de Salario por Departamento</h1>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <Bar data={charData} options={options}></Bar>
                </div>
            </div>
        </div>
        
    )
}
