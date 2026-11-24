'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { fetchCantidadJobs } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function page() {

    const [charData, setCharData] = useState({
          labels: [] as string[],
          datasets: [{
              label: 'Cantidad de Trabajos por Departamento',
              data: [] as any[],
             
             
              
          }]
  
      })

      const [options, setOptions] = useState(
        {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}
      )
      useEffect(() => {

        fetchCantidadJobs().then((data) => {
            const labels = data.map((item: any) => item.department_id);
            const cantidad = data.map((item: any) => parseInt(item.total_count));

            setCharData({
                labels: labels,
                datasets: [{
                    label: 'Cantidad de Trabajos por Departamento',
                    data: cantidad,  
                }]
            })
        })

      

      },[])
  
      
  return (
    <Line data={charData} options={options}></Line>
  )
}
