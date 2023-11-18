"use client";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const generateRandomData = (count = 12) =>
  Array.from({ length: count }, () => Math.floor(Math.random() * 100));

const euroMonthsData = generateRandomData();

const Graph = () => (
  <Bar
    data={{
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Euros",
          data: euroMonthsData,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    }}
    options={{
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: "category",
          position: "bottom",
        },
        y: {
          type: "linear",
          position: "left",
        },
      },
    }}
  />
);

function Customizable() {
  return (
    <section className="w-full flex items-center justify-center m-4">
      <div className="w-[600px] h-[600px] rounded-lg p-8 text-center">
        <Graph />
        <h1>Example yearly spending report</h1>
      </div>
    </section>
  );
}

export default Customizable;
