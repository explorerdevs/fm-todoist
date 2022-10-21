import React, { useState, useEffect } from "react";
import { DeleteBtn, GradientBtn } from "./buttons";
import styles from "../styles/todo-list.module.css";
import formStyles from "../styles/forms.module.css";
import api from "../API/api";

const TodoList = ({ refetch, setRefetch }) => {
  const [todosWithoutFilter, setTodosWithoutFilter] = useState([]);
  const [todos, setTodos] = useState([]);
  const [remainingTodos, setRemainingTodos] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const todos = await api.getAllTodos();
      console.log(todos);
      setTodos(todos);
      setTodosWithoutFilter(todos);
      const remainingTodos = todos.filter((todo) => !todo.completed);
      setRemainingTodos(remainingTodos.length);
    };
    fetch();
    setRefetch(false);
  }, [refetch]);

  //Todo Implement update when completed button is pressed
  const updateTodo = async (todo) => {
    await api.updateTodo(todo._id, {
      text: todo.text,
      completed: !todo.completed,
    });
    setRefetch(true);
  };
  // Todo Implement delete when delete button is pressed
  const deleteTodo = async (todoId) => {
    await api.deleteTodo(todoId);
    setRefetch(true);
  };

  // filter all
  const filterAllTodos = () => {
    setTodos(todosWithoutFilter);
  };

  // filter of active

  const filterActiveTodos = () => {
    const filteredTodos = todos.filter((todo) => !todo.completed);
    setTodos(filteredTodos);
  };

  // filter of completed
  const filterCompletedTodos = () => {
    const filteredTodos = todos.filter((todo) => todo.completed);
    setTodos(filteredTodos);
  };

  // delete all completed
  const deleteCompletedTodos = async () => {
    todos
      .filter((todo) => todo.completed)
      .forEach((todo) => deleteTodo(todo._id));

    setRefetch(true);
  };

  return (
    <section className="container">
      <ul aria-label="Todos">
        {todos.map((todo) => {
          return (
            <li
              key={todo._id}
              id={todo._id}
              className={`${formStyles["list-wrapper__input"]} flex flex-row items-center `}
            >
              <GradientBtn type="button" alt="complete" />
              <p
                className={`${formStyles["todo-text"]} ${formStyles["completed"]} `}
                onClick={(e) => updateTodo(todo)}
              >
                {`${todo.text} text`}
              </p>
              <DeleteBtn onClick={() => deleteTodo(todo._id)}
                type="button"
                className="btn btn-delete"
                style={{ color: "white" }} />
            </li>
          );
        })}
      </ul>
      {/* Note: Use grid for this */}
      <div className={styles["todo__controls"]}>
        <p style={{ color: "white" }}>{remainingTodos}</p>

        <div className="filter-btns">
          <button
            type="button"
            className="btn btn-filter"
            onClick={filterAllTodos}
            style={{ color: "white" }}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-filter"
            onClick={filterActiveTodos}
            style={{ color: "white" }}
          >
            Active
          </button>
          <button
            type="button"
            className="btn btn-filter"
            onClick={filterCompletedTodos}
            style={{ color: "white" }}
          >
            Completed
          </button>
        </div>
        <button
          type="button"
          className="btn btn-clear"
          onClick={deleteCompletedTodos}
          style={{ color: "white" }}
        >
          Clear Completed
        </button>
      </div>
    </section>
  );
};

/*
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
  */

export { TodoList };
