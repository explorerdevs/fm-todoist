import React from "react";
import styles from "../styles/header.module.css";
import formStyles from "../styles/forms.module.css";
import { GradientBtn, ThemeBtn } from "./buttons";

const Header = () => {
  return (
    <header className={styles["primary-header"]}>
      <div className="container flex flex-column justify-between">
        <div className="flex flex-row items-center justify-between margin-top">
          <h1 className="text-neutral-100 fs-900 fw-700 tracking-900">TODO</h1>
          <ThemeBtn />
        </div>

        <form
          className={`${formStyles["list-wrapper__input"]} flex flex-row items-center `}
        >
          <GradientBtn type="submit" alt="submit" />
          <input
            type="text"
            className={`${formStyles["todo-text"]}`}
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
