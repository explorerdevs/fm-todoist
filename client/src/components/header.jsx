import React from "react";
import { SunSvg } from "../common";
import btnStyles from "../styles/buttons.module.css";
import styles from "../styles/header.module.css";
import { GradientBtn } from "./buttons";

const Header = () => {
  return (
    <header className={styles["primary-header"]}>
      <div className="container flex flex-column justify-between">
        <div className="flex flex-row items-center justify-between ">
          <h1 className="text-neutral-100 fs-900 fw-700 tracking-900">TODO</h1>
          <button type="button" className={`btn ${btnStyles["btn-toggle"]}`}>
            <img src={SunSvg} alt="" />
            <span className="sr-only">Toggle The Theme</span>
          </button>
        </div>

        <form className="flex flex-row items-center ">
          <GradientBtn type="submit" srtext="Submit" />
          <input
            type="text"
            className=""
            name="todo"
            id="todo"
            placeholder="Create a new todo..."
          />
        </form>
      </div>
    </header>
  );
};

export { Header };
