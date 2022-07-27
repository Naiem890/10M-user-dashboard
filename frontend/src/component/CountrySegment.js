import React from "react";
import { Bar } from "react-chartjs-2";

const CountrySegment = () => {
  const countryData = [
    {
      country: "Bangladesh",
      userCount: 346,
    },
    {
      country: "UK",
      userCount: 456,
    },
    {
      country: "England",
      userCount: 346,
    },
    {
      country: "Canada",
      userCount: 3455,
    },
    {
      country: "Spain",
      userCount: 2314,
    },
  ];

  countryData.sort((a, b) => b.userCount - a.userCount);

  const data = {
    labels: countryData.map((country) => country.country),
    datasets: [
      {
        label: "User Count ",
        data: countryData.map((country) => country.userCount),
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
      <h2 className="text-2xl font-medium mb-4">Top 5 Country By User Count</h2>
      <Bar data={data}></Bar>
    </>
  );
};

export default CountrySegment;
