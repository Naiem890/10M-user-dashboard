import React from "react";
import { Pie } from "react-chartjs-2";

const GenderSegment = ({ genderSegment }) => {
  const data = {
    labels: genderSegment.map((g) => g._id),
    datasets: [
      {
        label: "Gender",
        data: genderSegment.map((g) => g.count),
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
