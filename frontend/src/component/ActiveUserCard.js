import React from "react";

const ActiveUserCard = (props) => {
  return (
    <div className="bg-white p-5  rounded-xl shadow-md">
      <h2 className="text-2xl mb-4 font-medium">{props.title}</h2>
      <span className="text-3xl  text-gray-400">
        {props.userCount ? props.userCount : "N/A"}
      </span>
    </div>
  );
};

export default ActiveUserCard;
