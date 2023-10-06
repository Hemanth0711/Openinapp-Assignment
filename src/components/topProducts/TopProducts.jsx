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
                cutout: "85%", // Adjust the cutout percentage to control the size of the ring
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
                    left: 20,
                },
            },
        },
    };

    const title = 'Doughnut Title'; // Your desired title text

    return (
        <div className='ring-chart'>
            <div className="chart-title">
                <span>Top Products</span>
                <span>May - June 2021</span>
            </div>
            <Doughnut data={data} options={options} style = {{marginRight: "5rem"}} />
        </div>
    );
};

export default TopProducts;
