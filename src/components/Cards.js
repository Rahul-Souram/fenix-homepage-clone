import React from "react";
import { SlideInAnimation } from "./SlideInAnimation";

const Cards = () => {
  const Cards = [
    {
      title: "Pro Free Trial",
      price: "24.99",
      monthly: "Monthly",
      button: "Start 7-Day Free Trial",
      key: [
        "70+ countries and associated events",
        "Access to munition data",
        "Dynamic category munition data charts",
        "Detailed country page layout (Map layers , Markers , Heatmap , Medical facilities, Infrastructure",
        "Complete munitions information (Pie charts, Line graphs)",
        "Informative date range selector",
        "Identified munitions",
        "Events timeline",
        "Upgrade to Teams at any time",
      ],
    },
    {
      title: "Pro",
      price: "$24.99",
      monthly: "Monthly",
      button: "Get Started Now",
      key: ["All Benefits of Free Trial Access", "Team Management"],
    },
    {
      title: "Enterprise",
      price: "For Larger Organisations",
      monthly: "yearly",
      button: "Get In Touch Now",
      key: [
        "All Benefits of Pro Access",
        "Team Management",
        "Dedicated Account Manager",
        "Technical Information Point of Contact",
        "Munition Documentation",
        "Advanced Munition Data",
      ],
    },
  ];
  return (
    <div className="d-flex card-containers justify-content-center">
      {Cards.map((item, index) => {
        const { title, price, monthly, button, key } = item;
        return (
          <SlideInAnimation direction={index % 2 ? "left": "right"} key={title} className="bg-white pe-4 ps-4 card m-3">
            <p className="text-center fw-bold">{title}</p>
            <h4 className="text-center ">{price}</h4>
            {monthly && (
              <button className="btn bg-green monthly text-center">{monthly}</button>
            )}
            <button type="button" className="btn fw-bold  mb-3 btn-outline-success">
              {button}
            </button>
            <div className="points-container">
              {key.map((child) => {
                return <p className="mt-2 fw-bold">&#10004; {child}</p>;
              })}
            </div>
          </SlideInAnimation>
        );
      })}
    </div>
  );
};

export default Cards;
