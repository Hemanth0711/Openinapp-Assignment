import React from "react";
import "./TopProducts.css";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, CategoryScale, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, CategoryScale, Legend);

const TopProducts = () => {
  const data = {
    datasets: [
      {
        data: [60, 30, 20],
        backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
        borderWidth: 0, // Adjust the borderWidth to control the width of the ring
        borderRadius: 5,
        cutout: "80%", // Adjust the cutout percentage to decrease the circle radius
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend to make the chart shorter
      },
    },
    responsive: true, // Ensure the chart scales properly within its container
    maintainAspectRatio: false, // Allow the chart to have a custom width and height
    width: 100, // Set the width of the chart (adjust as needed)
    height: 100, // Set the height of the chart (adjust as needed)
  };

  return (
    <div className="ring-chart">
      <div className="ring-title">
        <span>Top Products</span>
        <span>May - June 2021</span>
      </div>
      <div>
        <div>
          <Doughnut data={data} options={options} className="canvas" />
        </div>
        <div className="legends">
          <div className="legend">
            <div><div style = {{background: "#98D89E"}}></div>Basic Tees</div>
            <div> 55%</div>
          </div>
          <div className="legend">
            <div><div style = {{background: "#F6DC7D"}}></div>Custom Short Pants</div>
            <div> 31%</div>
          </div>
          <div className="legend">
            <div><div style = {{background: "#EE8484"}}></div>Super Hoodies</div>
            <div> 14%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
