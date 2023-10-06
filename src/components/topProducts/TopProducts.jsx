import React from 'react';
import "./TopProducts.css";
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, CategoryScale, Legend } from 'chart.js';

Chart.register(
    ArcElement,
    Tooltip,
    CategoryScale,
    Legend
);

const TopProducts = () => {
    const data = {
        labels: ['Trees', 'Plants', 'Wood'],
        datasets: [
            {
                data: [50, 30, 20],
                backgroundColor: ['#98D89E', '#EE8484', '#F6DC7D'],
                borderWidth: 0,
                borderRadius: 5,
                cutout: "80%", // Adjust the cutout percentage to control the size of the ring
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'right', // Position the legend on the right
                align: 'center', // Center the legend vertically
                labels: {
                    usePointStyle: true,
                    boxWidth: 12,
                    boxHeight: 12,
                    padding: 16,
                    font: {
                        size: 14,
                    },
                },
                margin: {
                    right: 20,
                },
            },
        },
    };

    const title = 'Doughnut Title'; // Your desired title text

    return (
        <div className='ring-chart'>
            <Doughnut data={data} options={options} plugins={[{
                beforeDraw: (chart) => {
                    const ctx = chart.ctx;
                    const { top } = chart.chartArea;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.font = '16px Montserrat';
                    ctx.fillStyle = '#000'; // Title text color
                    ctx.fillText(title, chart.width / 2, top - 10); // Adjust vertical position
                }
            }]} />
        </div>
    );
};

export default TopProducts;
