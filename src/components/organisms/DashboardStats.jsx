// src/components/organisms/DashboardStats.js
import React from "react";
import InfoCard from "../molecules/InfoCard";

const DashboardStats = () => {
  const data = [
    { iconType: "gear", title: "Total Workshop", count: "5.000" },
    { iconType: "light", title: "Total Conference/Seminar", count: "10.000" },
    { iconType: "graduation", title: "Total Training", count: "8.000" },
  ];

  return (
    <div>
      <InfoCard data={data} />
    </div>
  );
};

export default DashboardStats;
