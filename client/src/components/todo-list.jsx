import React from "react";
import { DeleteBtn, GradientBtn } from "./buttons";
import styles from "../styles/todo-list.module.css";
import formStyles from "../styles/forms.module.css";

const TodoList = () => {
  return (
    <section className="container">
      <ul aria-label="Todos" className="todo">
        <li className="flex items-center todo__list">
          <button type="button" className="btn btn-checkbox">
            <span className="sr-only">Complete Todo</span>

            <ul aria-label="Todos" className="">
              <li
                className={`${formStyles["list-wrapper__input"]} flex flex-row items-center `}
              >
                <GradientBtn type="button" alt="complete" />
                <p
                  className={`${formStyles["todo-text"]} ${formStyles["completed"]} `}
                >
                  Complete online JavaScript course
                </p>
                <button type="button" className="btn btn-delete">
                  <span className="sr-only">Delete</span>
                </button>
              </li>
              <li
                className={`${formStyles["list-wrapper__input"]} flex flex-row items-center `}
              >
                <GradientBtn type="button" alt="complete" />
                <p className={`${formStyles["todo-text"]}`}>Jog around the park 3x</p>
                <button type="button" className="btn btn-delete">
                  <span className="sr-only">Delete</span>
                </button>
              </li>
            </ul>

            {/* 
      We can add this same form from the header:
 

      <form
        className={`${styles["list-wrapper__input"]} flex flex-row items-center `}
      >
        <GradientBtn type="submit" srtext="Submit" />
        <input
          type="text"
          className=""
          name="todo"
          id="todo"
          placeholder="Create a new todo..."
        />
      </form>
  */}

            {/* Note: Use grid for this */}
            <div className={styles["todo__controls"]}>
              <p>5 items left</p>

              <div className="filter-btns">
                <button type="button" className="btn btn-filter">
                  All
                </button>
                <button type="button" className="btn btn-filter">
                  Active
                </button>
                <button type="button" className="btn btn-filter">
                  Completed
                </button>
              </div>
              <button type="button" className="btn btn-clear">
                Clear Completed
              </button>
            </div>
          </section>
          );
};

          export {TodoList};
