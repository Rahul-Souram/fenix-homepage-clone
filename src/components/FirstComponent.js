import React from "react";
import firstImage from "../images/firstImage.png";
import { SlideInAnimation } from "./SlideInAnimation";

const FirstComponent = () => {
  return (
    <div className="d-md-flex first-bg p-3 mt-4">
      <SlideInAnimation className=" text-white content m-2">
        <h1 className=" text-start title fs-1">
          Artificial Intelligence. Real Insights.
        </h1>
        <div className="fs-5 text-start mt-4 mb-4">
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
      </SlideInAnimation>
      <SlideInAnimation direction="right" className="first-img m-2">
        <img src={firstImage} alt="firstImage" />
      </SlideInAnimation>
    </div>
  );
};

export default FirstComponent;
