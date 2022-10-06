import React from "react";
import styles from "../styles/header.module.css";
import { SunSvg } from "../common";

const Header = () => {
  return (
    <header>
      <div className="container flex flex-row space-between">
        <h1 className="fs-900 fw-700">TODO</h1>
        <button className={`btn ${styles["header__btn"]}`}>
          <img src={SunSvg} alt="" />
        </button>
      </div>
    </header>
  );
};

export { Header };
