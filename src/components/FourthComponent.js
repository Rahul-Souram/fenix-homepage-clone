import React from "react";
import img1 from "../images/fenix-image-1.png";
import img2 from "../images/fenix-image-2.png";
import img3 from "../images/fenix-image-3.png";
import { SlideTop } from "./SlideTop";
import { SlideInAnimation } from "./SlideInAnimation";

const ForthComponent = () => {
  const RealCards = [
    {
      title: "Local news and social media monitored and mapped 24-7",
      img: img1,
    },
    {
      title: "Full detail and source of every conflict event recorded",
      img: img2,
    },
    {
      title: "Powerful image search categories images, videos and other stuff",
      img: img3,
    },
  ];
  return (
    <div className="fourth pt-5 pb-5 m-3">
      <div className="text-dark fourth-summary">
        <SlideTop direction="top">
          <h1 className="title text-center ps-2 pe-2 text-white">
            Real-time, interactive, global data
          </h1>
        </SlideTop>
        <div className="mt-4 d-flex card-containers justify-content-center">
          {RealCards.map((item, index) => {
            const { title, img } = item;
            return (
              <SlideInAnimation
                direction={index % 2 ? "left" : "right"}
                className="card m-3 p-2"
                durationTime={2}
              >
                <p className="pb-2 fw-bold">{title}</p>
                <img src={img} alt={title} />
              </SlideInAnimation>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ForthComponent;
