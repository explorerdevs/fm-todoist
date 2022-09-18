import React, { useState } from "react";
import Header from "./Header"

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState("");

  const setAndSaveItems = (newItem) => {
    setItems(newItem);
    localStorage.setItem("todolist", JSON.stringify(newItem));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const listItems = [...items];
    setAndSaveItems(listItems);
  }

  return (
    <React.Fragment>
      <Header />


      <div className="todoList container">
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

      <div className="reorderList container">Drag and drop to reorder list</div>


      <footer>
        <div className="attribution container">
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
    </React.Fragment>
  );
}

export default App;
