import React from "react";
import { CrossSvg, MoonSvg, SunSvg } from "../common";
import { useSetTheme, useTheme } from "../context";
import btnStyles from "../styles/buttons.module.css";

const GradientBtn = ({ type, alt }) => {
  return (
    <button type={type} className={`btn ${btnStyles["btn-checkbox"]}`}>
      <span className="sr-only">{alt}</span>
    </button>
  );
};

const ThemeBtn = () => {
   const setTheme = useSetTheme();
  const theme = useTheme();

  return (
    <button
      type="button"
      className={`btn ${btnStyles["btn-toggle"]}`}
         onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <img src={theme === "theme-light" ? MoonSvg : SunSvg} alt="" />
      <span className="sr-only">Toggle The Theme</span>
    </button>
  );
};

const DeleteBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={`btn ${btnStyles["btn-delete"]}`} data-type="delete">
      <img src={CrossSvg} alt="" />
      <span className="sr-only">Delete</span>
    </button>
  );
};

export { GradientBtn, ThemeBtn, DeleteBtn };
