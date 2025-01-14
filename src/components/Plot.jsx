import React from "react";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components

ChartJS.register(ArcElement, Tooltip, Legend);

// const options = {
//   responsive: true,
//   scales: {
//     r: {
//       // angleLines: {
//       //   display: false,
//       // },
//       min: 0,
//       max: 1,
//       beginAtZero: true,
//       ticks: {
//         stepSize: 0.2,
//         callback: (v, t, c) => {
//           return v;
//         },
//         showLabelBackdrop: false,
//       },
//       backgroundColor: "rgba(255, 255, 255, 0.2)",
//     },
//   },
// };

const Box = styled.div`
  margin: 7rem auto 4rem auto;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.1),
    0 6px 20px 0 rgba(255, 255, 255, 0.09);
  outline: none;
  padding: 5px 10px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40rem;
  width: 40%;
  // resize: none;
  color: rgba(255, 255, 255, 0.6);

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    width: 90%;
    height: 30rem;
  }
`;

function Plot({ data }) {
  const label = Object.keys(data);
  const value = Object.values(data);
  const dataDisplay = {
    labels: label,
    datasets: [
      {
        label: "# of Votes",
        data: value,
        backgroundColor: "rgba(112, 112, 112, 0.5)",
        borderColor: "rgba(215, 215, 215, 0.66)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <Box>
      <Doughnut data={dataDisplay} />
    </Box>
  );
}

export default Plot;
