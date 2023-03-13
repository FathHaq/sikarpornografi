import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function ChartDashboard({jumlah}) {
    const data = {
        labels: ['Kanak-kanak', 'Pra remaja', 'Remaja', 'Dewasa Awal', 'Dewasa Akhir', 'Lansia'],
        datasets: [
            {
            label: 'Jumlah Respondent',
            data: [jumlah.child, jumlah.teen, jumlah.oldTeen, jumlah.adult, jumlah.oldAdult, jumlah.older],
            backgroundColor: [
                '#fffffe',
                '#bae8e8',
                '#00ebc7',
                '#ffd803',
                '#ff8e3c',
                '#ff5470',
            ],
            borderColor: [
                '#fffffe',
                '#d0ffff',
                '#11ffdb',
                '#ffdd21',
                '#ff9a51',
                '#ff7189',
            ],
            borderWidth: 4,
            },
        ],
    };
  return (
    <div className='card shadow-md bg-white flex items-center justify-center w-full lg:w-[40%] py-5'>
        <div>
            <h1 className='text-center font-semibold text-xl px-8 uppercase'>Data responden berdasarkan umur</h1>
            <Pie data={data} />
        </div>
    </div>
  )
}