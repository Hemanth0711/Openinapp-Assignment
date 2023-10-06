import React from 'react';
import "./TopProducts.css";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    CategoryScale,
    Legend,
} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    CategoryScale,
    Legend
)

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
                position: 'right', // Position the legend to the right
                align: 'center', // Center the legend vertically
                labels: {
                    usePointStyle: true, // Use small circle shapes for legend items
                    boxWidth: 12, // Adjust the width of the legend items
                    boxHeight: 12, // Adjust the height of the legend items
                    padding: 16, // Add padding between legend items
                    font: {
                        size: 14, // Set the legend text size
                    },
                },
                margin: {
                    right: 20, // Add right margin to the legend
                },
            },
        },
    };

    return (
        <div className='ring-chart'>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default TopProducts;
