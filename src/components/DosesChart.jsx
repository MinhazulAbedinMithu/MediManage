import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const DosesChart = () => {
  const data = {
    labels: ['Morn', 'Aft', 'Eve', 'Nig', 'For', 'Ski', 'Sun'],
    datasets: [
      {
        label: '6',
        data: [10, 13, 11, 0, 14, 11, 14],
        backgroundColor: 'rgb(193, 193, 193)', 
        barThickness: 10,
      },
      {
        label: '15',
        data: [15, 15, 15, 15, 15, 15, 15],
        backgroundColor: 'rgba(196, 196, 196, 0.8)', 
        barThickness: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
        ticks: {
          stepSize: 5,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className="w-full h-64">
      <Bar data={data} options={options} />
    </div>
  );
};

export default DosesChart;
