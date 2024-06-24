//src/PieChart.js
import React from 'react';
import { PieChart, Pie, Sector, cell } from 'eact-chartjs-2';

const PieChart = ({ data }) => {
    const chartData = {
        labels: ['Cases', 'Recoveries', 'Deaths'],
        datasets: [
            {
                data: [data.cases, data.recoveries, data.deaths],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <PieChart data={chartData} />
    );
};