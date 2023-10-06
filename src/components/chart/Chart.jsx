import React from 'react';
import "./Chart.css";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Chart() {
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Label 1',
                data: [40, 100, 200, 120],
                backgroundColor: '#98D89E',
                borderRadius: 5,
            },
            {
                label: 'Label 2',
                data: [70, 100, 200, 140],
                backgroundColor: '#EE8484',
                borderRadius: 5,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                grid: {
                    display: false,
                },
                barGap: 0.1, // Add a 10% gap between the bars
                padding: 10, // Add 10 pixels of padding between the labels and the edges of the chart
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 100,
                    max: 300,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top', // Move the legend to the top
                align: 'end',   // Align the legend to the end (right) of the chart
                labels: {
                    usePointStyle: true, // Use small circle shapes for legend items
                    boxWidth: 8,         // Adjust the width of the legend items
                    boxHeight: 8,        // Adjust the height of the legend items
                    padding: 16,         // Add padding between legend items
                },
            },
            title: {
                display: true,
                text: 'Chart', // Add your chart title text here
                position: 'top',    // Position the title at the top
                align: 'start',     // Align the title to the start (left) from the user's perspective
                padding: 20,        // Add more padding to the title to make it visible
                font: {
                    size: 16,       // Adjust the title font size as needed
                },
            },
            description: {
                text: 'Chart Description', // Add your chart description text here
                position: 'top',          // Position the description at the top
                align: 'start',           // Align the description to the start (left) from the user's perspective
                font: {
                    size: 12,             // Adjust the description font size as needed
                },
            },
        }
    };

    return (
        <div className='chart'>
            <Bar data={data} options={options} />
        </div>
    );
}
