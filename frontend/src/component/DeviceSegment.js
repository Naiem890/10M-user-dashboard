import React from "react";
import { Bar } from "react-chartjs-2";

const DeviceSegment = () => {
  const DeviceData = [
    {
      deviceType: "Desktop",
      userCount: 346,
    },
    {
      deviceType: "Tablet",
      userCount: 456,
    },
    {
      deviceType: "Phone",
      userCount: 346,
    },
  ];

  DeviceData.sort((a, b) => b.userCount - a.userCount);

  const data = {
    labels: DeviceData.map((device) => device.deviceType),
    datasets: [
      {
        label: "User Count ",
        data: DeviceData.map((device) => device.userCount),
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
      <h2 className="text-2xl font-medium mb-4">User Count By DeviceType</h2>
      <Bar data={data}></Bar>
    </>
  );
};

export default DeviceSegment;
