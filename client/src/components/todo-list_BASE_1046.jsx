import React from "react";
import styles from "../styles/todo-list.module.css";

const TodoList = () => {
  return (
    <section className="container">
      <ul aria-label="Todos" className="">
        <li className="flex items-center">
          <button type="button" className="btn btn-checkbox">
            <span className="sr-only">Complete Todo</span>
          </button>
          <p className="">Jog around the park 3x</p>
          <button type="button" className="btn btn-delete">
            <span className="sr-only">Delete</span>
          </button>
        </li>
      </ul>

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

export { TodoList };
