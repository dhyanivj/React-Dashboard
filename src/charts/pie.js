import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  return (
    <div className="line-chart">
      <h4>Bounce Rate by week (Sample)</h4>
      <Pie
        data={{
          labels: ["Red", "Yellow", "Blue"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 23]
            }
          ]
        }}
        height={200}
        width={300}
      />
    </div>
  );
};

export default PieChart;
