import React from "react";
import { SlideTop } from "./SlideTop";

const Final = () => {
  return (
    <div className="final-bg">
      <SlideTop direction="top" className="final-bg-inner">
        <h1 className="text-white title">There's even more to Fenix Insight...</h1>
        <p  className="text-white fs-3 mt-3">Find out about our Defense Intelligence products.</p>
        <button type="button" className="btn bg-green">
          Learn More
        </button>
      </SlideTop>
    </div>
  );
};

export default Final;
