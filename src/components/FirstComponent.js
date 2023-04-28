import React from "react";
import firstImage from "../images/firstImage.png";

const FirstComponent = () => {
  return (
    <div className="d-md-flex first-bg">
      <div className=" text-white content">
        <h1 className=" text-start title">
          Artificial Intelligence. Real Insights.
        </h1>
        <div className="fs-4 text-start">
          Fenix Insight is an advanced insight engine purpose built for EOD
          operations, training and risk management. It incorporates an
          artificial intelligence system, scanning millions of online resources,
          giving an accurate global map of explosive ordnance risk.
        </div>
        <div className="mt-3">
          <button type="button" className="btn bg-green">
            Get Started Now
          </button>
          <button type="button" className="btn text-white ">
            Log In
          </button>
        </div>
      </div>
      <div className="first-img">
        <img src={firstImage} alt="firstImage" />
      </div>
    </div>
  );
};

export default FirstComponent;
