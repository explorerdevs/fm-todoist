import React, { useState } from "react";
import DragAndDrop from "./DragAndDrop";
import Footer from "./Footer";
import { Header, TodoList } from "./components";
import ItemsControlGroup from "./ItemsControlGroup";
import List from "./List";
import NewItem from "./NewItem";
import ToDoControls from "./ToDoControls";

const data = [
  {
    id: "1",
    checked: false,
    item: "Go shopping",
  },
  {
    id: "2",
    checked: false,
    item: "Spoil the piggy",
  },
  {
    id: "3",
    checked: false,
    item: "Learn React",
  },
];

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(data);

  const handleSubmit = (/** @type {React.FormEvent<HTMLFormElement>} */ e) => {
    e.preventDefault();
    // addItem(newItem);
    setNewItem("");
  };

  const handleIsCompleted = (/** @type {number | string} */ id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todos", JSON.stringify(listItems));
  };

  const handleDelete = (/** @type {number | string} */ id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todos", JSON.stringify(listItems));
  };

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
        handleCheck={handleIsCompleted}
        handleDelete={handleDelete}
      />
      <ToDoControls />
      <ItemsControlGroup />
      <DragAndDrop />
      <Footer />
    </div>
  );
}

export default App;
