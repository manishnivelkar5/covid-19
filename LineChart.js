//src/LineChart.js
import react from 'eact';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'eact-chartjs-2';

const LineChart = ({ data }) => {
    const chartData = {
        labels: data.map((item) => item.date),
        datasets: [
            {
                label: 'Cases',
                data: data.map((item) => item.cases),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <LineChart data={chartData} />
    );
};

