import React, { useState } from "react";
import SunSVG from "./images/icon-sun.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div id="app"></div>

      <header>
        <div className="container">
          <h1>Todo</h1>
          <button id="toggle" title="Change light/dark mode">
            <img src={SunSVG} alt="" />
          </button>
        </div>
      </header>
      <div className="container">
        <form id="newTodo">
          <button className="checkbox"></button>
          <input
            type="text"
            name="newItem"
            id="newItem"
            placeholder="Create a new todo..."
            required
          />
        </form>

        <div id="todoList">
          <div id="listItems"></div>
          <div id="todoControls">
            <div className="control-info">
              <p>
                <span id="numberOfItems">5</span> items left
              </p>
              <button>Clear Completed</button>
            </div>
            <div className="items-control-group">
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
          </div>
        </div>

        <div id="reorderList">Drag and drop to reorder list</div>
      </div>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Jolene Kearse</a>,
        <a href="https://www.ashmoreno.dev" target="_blank">
          Ash Moreno
        </a>
        ,
        <a href="https://wfeliciano20.github.io/Portfolio/" target="_blank">
          William Rios
        </a>
        , and <a href="https://github.com/princemuel">Samuel Chukwuzube</a>.
      </div>
    </React.Fragment>
  );
}

export default App;
