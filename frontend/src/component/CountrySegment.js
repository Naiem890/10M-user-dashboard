import React from "react";
import { Bar } from "react-chartjs-2";

const CountrySegment = ({ countrySegment }) => {
  const data = {
    labels: countrySegment.map((country) => country._id),
    datasets: [
      {
        label: "User Count ",
        data: countrySegment.map((country) => country.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
      },
    ],
  };
  return (
    <>
      <h2 className="text-2xl font-medium mb-4">
        Top 10 Country By User Count
      </h2>
      <Bar data={data}></Bar>
    </>
  );
};

export default CountrySegment;
