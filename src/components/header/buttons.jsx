import React from "react";
import cv from "../../assets/Mahesh Chavan_V1.5.pdf";
const Buttons = () => {
  return (
    <div className="cta">
      <a href={cv} className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Buttons;
