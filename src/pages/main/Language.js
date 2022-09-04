import React from "react";
import { Bar } from "react-chartjs-2";
import { FlexTable } from "./EduPage";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "styled-components";
const Language = () => {
  const labels = [
    "Java",
    "React.js",
    "HTML",
    "Styled-Components",
    "JPA",
    "MY-SQL",
    "TypeScript",
    "AWS",
  ];

  var yLabels = {
    20: "초급",
    40: "초급보다 조금 능숙",
    60: "중급",
    80: "중급보다 조금 능숙",
    100: "고급()",
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.yLabel;
        },
      },
    },
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          callback: function (value, index, values) {
            return yLabels[value];
          },
        },
      },
    },
    title: {
      display: true,
      text: "Bar Graph to show proficency",
    },
    labels: false,
  };
  const data = {
    labels,
    datasets: [
      {
        data: [40, 75, 75, 90, 30, 50, 40, 50],
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(105, 206, 86, 0.2)",
          "rgba(5, 16, 76, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255,99,132,0.2)",
        ],
        borderColor: ["rgb(255,255,255)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <FlexTable>
      <ChartWrapper>
        <Bar options={options} data={data} />
      </ChartWrapper>
    </FlexTable>
  );
};

const ChartWrapper = styled.div`
  width: 80%;
  height: 30%;
  text-align: center;
`;

export default Language;
