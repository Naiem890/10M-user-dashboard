import React from "react";
import ActiveUserCard from "./ActiveUserCard";

const ActiveUserCards = () => {
  return (
    <>
      <ActiveUserCard title={"Daily Active User"}></ActiveUserCard>
      <ActiveUserCard
        title={"Weekly Active User"}
        // userCount={100}
      ></ActiveUserCard>
      <ActiveUserCard
        title={"Monthly Active User"}
        // userCount={100}
      ></ActiveUserCard>
    </>
  );
};

export default ActiveUserCards;
