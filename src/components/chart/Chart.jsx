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
                data: [40, 100, 200, 500],
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
                    max: 500,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
                position: 'top', // Move the legend to the top
                align: 'end',   // Align the legend to the end (right) of the chart
                labels: {
                    usePointStyle: true, // Use small circle shapes for legend items
                    boxWidth: 8,         // Adjust the width of the legend items
                    boxHeight: 8,        // Adjust the height of the legend items
                    padding: 16,         // Add padding between legend items
                },
            }
        }
    };

    return (
        <div className='chart'>
            <div>
                <span className="chart-title">Activities</span>
                <div>
                    <span className='chart-date'>May - June 2021</span>
                    <div className='chart-legends'>
                        <div><div style = {{background: "#98D89E"}} ></div>Guest</div>
                        <div><div style = {{background: "#EE8484"}} ></div>User</div>
                    </div>
                </div>
            </div>
            <Bar data={data} options={options} style = {{width: "100%"}}/>
        </div>
    );
}
