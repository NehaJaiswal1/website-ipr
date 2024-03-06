
import React from 'react'
import './Schedule.css'

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../../Data/ChartData";
import PieChart from "../../Components/DashboardContent/PieChart";

Chart.register(CategoryScale);

function Schedule() {

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Event & Conference happen between",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 
  return (
    <div>
        <PieChart chartData={chartData}
         />
    </div>
  )
}

export default Schedule
