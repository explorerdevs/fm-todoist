import React from "react";
import Header from "./Header";
import NewItem from "./NewItem";
import List from "./List";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Go shopping"
    },
    {
      id: 2,
      checked: false,
      item: "Spoil the piggy"
    },
    {
      id: 3,
      checked: false,
      item: "Learn React"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem("");
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('todolist', JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header />
      <NewItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <List
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />



      <div id="todoControls">
        <div className="control-info">
          <p>
            <span id="numberOfItems">3</span> items left
          </p>
          <button>Clear Completed</button>
        </div>
        <div className="items-control-group">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>


      <div id="reorderList">Drag and drop to reorder list</div>


      <Footer />
    </div>
  );
}

export default App;
