import React from "react";
import Slider from "infinite-react-carousel";
import grofersPamphlet from "../../assets/GrofersPamphlet.jpg";
import grofersCode from "../../assets/grofersCode.jpg";
import "./home.css";

const CodeUse = () => {
  return (
    <div className="codeUse">
      <Slider>
        <div>
          <img src={grofersPamphlet} alt="img" />
        </div>
        <div>
          <img src={grofersCode} alt="img" />
        </div>
      </Slider>
    </div>
  );
};

export default CodeUse;