import React from "react";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <header className="primary-header">
        <div className="container">
          <h1>Todo</h1>
          <button id="toggle" title="Change light/dark mode">
            <img src="images\icon-moon.svg" alt="" />
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

      <Footer />
    </React.Fragment>
  );
}

export default App;
