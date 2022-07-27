import React from "react";
import ActiveUserCards from "./ActiveUserCards";
import CountrySegment from "./CountrySegment";
import GenderSegment from "./GenderSegment";
import { Chart as ChartJS } from "chart.js/auto";
import DeviceSegment from "./DeviceSegment";
import UserTable from "./UserTable";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 my-11">
      <div className="grid grid-cols-5 gap-10 items-center">
        <div className="grid md:grid-cols-3 gap-4 col-span-4">
          <ActiveUserCards></ActiveUserCards>
        </div>
        <div className="col-span-1">
          <GenderSegment />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-10 gap-10">
        <div className="col-span-2 ">
          <CountrySegment />
        </div>
        <div className="col-span-2">
          <DeviceSegment />
        </div>
      </div>
      <div className="mt-10">
        <UserTable />
      </div>
    </div>
  );
};

export default Dashboard;
