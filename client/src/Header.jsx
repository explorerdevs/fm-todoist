import React from "react";
import "./Header.css";
import SunSVG from "./images/icon-sun.svg";

const Header = () => {
  return (
    <header className="primary-header container">
      <div className="align">
        <div className="flex-spread">
          <h1>Todo</h1>
          <button
            className="toggle"
            title="Change light/dark mode"
            aria-label="Add Item"
          >
            <img src={SunSVG} alt=""></img>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
