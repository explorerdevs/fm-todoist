import React from "react";
import styles from "../styles/header.module.css";
import formStyles from "../styles/forms.module.css";
import { GradientBtn, ThemeBtn } from "./buttons";
import api from "../API/api";

// Maybe we can use useContext and .unshift array method here so we
// can add to do at the beginning of the list.

const Header = ({ setRefetch }) => {
  const createTodo = async (e) => {
    e.preventDefault();
    await api.createTodo({ todo: e.target.todo.value });
    e.target.todo.value = "";
    setRefetch(true);
  };

  return (
    <header className={styles["primary-header"]}>
      <div className="container flex flex-column justify-between">
        <div className="flex flex-row items-center justify-between margin-top">
          <h1 className="text-neutral-100 fs-900 fw-700 tracking-900">TODO</h1>
          <ThemeBtn />
        </div>

        <form
          className={`${formStyles["list-wrapper__input"]} flex flex-row items-center `}
          onSubmit={(e) => createTodo(e)}
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
