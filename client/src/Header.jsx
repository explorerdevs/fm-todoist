import React from "react";
import SunSVG from "./images/icon-sun.svg";
import "./Header.css";

const Header = (newItem, setNewItem) => {
  return (
    <header>
      <div className="container align">
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
        <form id="newTodo">
          <div className="check-list">
            <button className="checkbox"></button>
            <input
              type="text"
              name="newItem"
              className="newItem"
              placeholder="Create a new todo..."
              required
            />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
