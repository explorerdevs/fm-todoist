import React from "react";
import { SunSvg } from "../common";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex flex-row items-center justify-between ">
          <h1 className="fs-900 fw-700">TODO</h1>
          <button type="button" className={`btn ${styles["btn-toggle"]}`}>
            <img src={SunSvg} alt="" />
          </button>
        </div>

        <form>
          <button type="submit" className="btn btn-checkbox">
            <span className="sr-only">Submit</span>
          </button>
          <input
            type="text"
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
