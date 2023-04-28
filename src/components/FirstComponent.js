import React from "react";
import firstImage from "../images/firstImage.png";

const FirstComponent = () => {
  return (
    <div className="d-md-flex first-bg p-3 mt-4">
      <div className=" text-white content m-2">
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
          <button type="button" className="btn bg-green fw-bold">
            Get Started Now
          </button>
          <button type="button" className="btn text-white fw-bold">
            Log In
          </button>
        </div>
      </div>
      <div className="first-img m-2">
        <img src={firstImage} alt="firstImage" />
      </div>
    </div>
  );
};

export default FirstComponent;
