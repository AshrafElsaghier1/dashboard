import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { useEffect, useState } from "react";
ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      const response = await axios.get(
        "https://dummy.restapiexample.com/api/v1/employees"
      );
      if (response.status === 200) {
        setChart(response.data.data.slice(0, 8));
      }
    };
    fetchChartData();
  }, []);
  let options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "left",
      },
    },
  };

  const data = {
    labels: chart.map(({ employee_name }) => employee_name),
    datasets: [
      {
        label: "salary",
        data: chart.map(({ employee_salary }) => employee_salary),
        backgroundColor: [
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
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
