import React from "react";
import Footer from "../components/Footer";
import StatisticsNav from "../components/StatisticsNav";
import StatisticsContainer from "../components/StatisticsContainer";

const Statistics = () => {
  return (
    <div>
      <StatisticsNav />
      <div className="mb-24">
      <StatisticsContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Statistics;
