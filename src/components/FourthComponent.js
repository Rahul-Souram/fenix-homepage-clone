import React from "react";
import img1 from "../images/fenix-image-1.png";
import img2 from "../images/fenix-image-2.png";
import img3 from "../images/fenix-image-3.png";

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
        <h1 className="title text-center">Real-time, interactive, global data</h1>
        <div className="mt-4 d-flex card-containers justify-content-center">
          {RealCards.map((item) => {
            const { title, img } = item;
            return (
              <div className="card m-3 p-2">
                <p className="pb-2">{title}</p>
                <img src={img} alt={title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ForthComponent;
