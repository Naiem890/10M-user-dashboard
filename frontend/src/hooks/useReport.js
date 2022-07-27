import { useQuery } from "react-query";
import React from "react";
import ReactDOM from "react-dom/client";

const useReport = () => {
  const { isLoading, error, data } = useQuery(
    ["report"],
    async () =>
      await fetch("http://localhost:8080/report").then((res) => res.json())
  );

  return { isLoading, error, data };
};

export default useReport;
