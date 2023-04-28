import React from "react";
import PieChart from '../components/PieChart'
const ThirdComponent = () => {
  return (
    <div className="third p-5 m-3 first-bg ">
    <div className="content">
      <div className="text-white third-summary">
        <h1 className="title">Powered by custom A.I.</h1>
        <div className="fs-4 mt-4 third-description">
          We combine Machine Learning, Natural Language Processing and lightning
          fast databases for results which are up-to-date and accurate.
        </div>
      </div>
    </div>
    <div className="first-img mt-3">
    <PieChart />
    </div>
    </div>
  );
};

export default ThirdComponent;
