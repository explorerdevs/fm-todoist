import React from "react";
import { Header, TodoList } from "./components";

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
  return (
    <>
      <Header />
      <TodoList />

      <div className="container">
        <p>Drag and drop to reorder list</p>
      </div>
    </>
  );
}

export default App;
