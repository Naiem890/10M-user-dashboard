import React, { useEffect, useState } from "react";
import ActiveUserCards from "./ActiveUserCards";
import CountrySegment from "./CountrySegment";
import GenderSegment from "./GenderSegment";
import { Chart as ChartJS } from "chart.js/auto";
import DeviceSegment from "./DeviceSegment";
import UserTable from "./UserTable";
import Loading from "./Loading";
import UserForm from "./UserForm";

const Dashboard = () => {
  const [isLoading] = useState(false);

  const [report, setReport] = useState({});

  const getReport = async () => {
    try {
      fetch("http://localhost:8080/report")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return setReport(data);
        });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getReport();
  }, [isLoading]);

  if (!report.gender) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 my-11">
      <div className="grid grid-cols-5 gap-10 items-center">
        <div className="grid md:grid-cols-3 gap-4 col-span-4">
          <ActiveUserCards></ActiveUserCards>
        </div>
        <div className="col-span-1">
          <GenderSegment genderSegment={report.gender} />
        </div>
      </div>

      <div className="grid grid-cols-4 mt-10 gap-10">
        <div className="col-span-2 ">
          <CountrySegment countrySegment={report.country} />
        </div>
        <div className="col-span-2">
          <DeviceSegment deviceSegment={report?.device} />
        </div>
      </div>
      <div className="mt-10">
        <UserTable users={report.user} />
        <UserForm getReport={getReport} />
      </div>
    </div>
  );
};

export default Dashboard;
