import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

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

      <Footer />

    </React.Fragment>
  );
}

export default App;
