import React, { useState } from "react";
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
  const [refetch, setRefetch] = useState(false);
  return (
    <>
      <Header setRefetch={setRefetch} />
      <TodoList refetch={refetch} setRefetch={setRefetch} />

      <div className="container">
        <p>Drag and drop to reorder list</p>
      </div>
    </>
  );
}

export default App;
