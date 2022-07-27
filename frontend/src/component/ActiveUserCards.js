import React from "react";
import ActiveUserCard from "./ActiveUserCard";

const ActiveUserCards = ({ active }) => {
  console.log(active);
  return (
    <>
      <ActiveUserCard
        title={"Daily Active User"}
        userCount={active.lastDay}
      ></ActiveUserCard>
      <ActiveUserCard
        title={"Weekly Active User"}
        userCount={active.lastWeek}
      ></ActiveUserCard>
      <ActiveUserCard
        title={"Monthly Active User"}
        userCount={active.lastMonth}
      ></ActiveUserCard>
      <ActiveUserCard
        title={"Total User"}
        userCount={active.all}
      ></ActiveUserCard>
    </>
  );
};

export default ActiveUserCards;
