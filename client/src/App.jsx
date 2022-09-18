import React, { useState } from "react";
import SunSVG from "./images/icon-sun.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div className="app">
        <header>
          <div className="container">
            <h1>Todo</h1>
            <button className="toggle" title="Change light/dark mode">
              <img src={SunSVG} alt="" />
            </button>
          </div>
        </header>
        <div className="container">
          <form className="newTodo">
            <div className="form-control">
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

          <div className="todoList">
            <div className="listItems"></div>
            <div className="todoControls">
              <div className="control-info">
                <p>
                  <span className="numberOfItems">5</span> items left
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

          <div className="reorderList">Drag and drop to reorder list</div>
        </div>

        <footer>
          <div className="attribution">
            Challenge by&nbsp;
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Jolene Kearse</a>, <br />
            <a href="https://www.ashmoreno.dev" target="_blank">
              Ash Moreno
            </a>
            ,&nbsp;
            <a href="https://wfeliciano20.github.io/Portfolio/" target="_blank">
              William Rios
            </a>
            , and <a href="https://github.com/princemuel">Samuel Chukwuzube</a>.
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
