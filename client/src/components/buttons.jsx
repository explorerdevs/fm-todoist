import React from "react";
import { CrossSvg, SunSvg } from "../common";
import { useTheme } from "../context";
import btnStyles from "../styles/buttons.module.css";

const GradientBtn = ({ type, alt }) => {
  return (
    <button type={type} className={`btn ${btnStyles["btn-checkbox"]}`}>
      <span className="sr-only">{alt}</span>
    </button>
  );
};

const ThemeBtn = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`btn ${btnStyles["btn-toggle"]}`}
      onClick={toggleTheme}
    >
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
