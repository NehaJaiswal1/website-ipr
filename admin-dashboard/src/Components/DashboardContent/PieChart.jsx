

import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Event Schedule Data Analysis</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Event and Conferences between 2016-2020"
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;