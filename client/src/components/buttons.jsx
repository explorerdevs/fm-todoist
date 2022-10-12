import React from "react";
import { SunSvg, CrossSvg } from "../common";
import btnStyles from "../styles/buttons.module.css";

const GradientBtn = ({ type, alt }) => {
  return (
    <button type={type} className={`btn ${btnStyles["btn-checkbox"]}`}>
      <span className="sr-only">{alt}</span>
    </button>
  );
};

const ThemeBtn = () => {
  return (
    <button type="button" className={`btn ${btnStyles["btn-toggle"]}`}>
      <img src={SunSvg} alt="" />
      <span className="sr-only">Toggle The Theme</span>
    </button>
  );
};

const DeleteBtn = () => {
  return (
    <button type="button" className={`btn ${btnStyles["btn-delete"]}`}>
      <img src={CrossSvg} alt="" />
      <span className="sr-only">Delete</span>
    </button>
  );
};

export { GradientBtn, ThemeBtn, DeleteBtn };
