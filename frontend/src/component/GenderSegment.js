import React from "react";
import { Pie } from "react-chartjs-2";

const GenderSegment = () => {
  const data = {
    labels: ["Female", "Male"],
    datasets: [
      {
        label: "Gender",
        data: [1233, 1212],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
    ],
  };
  return (
    <div className="mx-auto w-46">
      {/* <h2 className="text-2xl mb-4">User Count By Gender</h2> */}

      <Pie data={data} />
    </div>
  );
};

export default GenderSegment;
