import React from "react";
import { SunSvg } from "../common";
import btnStyles from "../styles/buttons.module.css";

const GradientBtn = ({ type, srtext }) => {
  return (
    <button type={type} className={`btn ${btnStyles["btn-checkbox"]}`}>
      <span className="sr-only">{srtext}</span>
    </button>
  );
};

const ThemeBtn = () => {
  return (
    <button
      type="button"
      className={`btn ${btnStyles["btn-toggle"]} ${btnStyles["checked"]}`}
    >
      <img src={SunSvg} alt="" />
      <span className="sr-only">Toggle The Theme</span>
    </button>
  );
};

export { GradientBtn, ThemeBtn };
