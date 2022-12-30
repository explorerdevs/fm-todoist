import React, { Fragment, useState } from "react";
import { Header, TodoList } from "./components";

function App() {
  const [refetch, setRefetch] = useState(false);
  return (
    <Fragment>
      <Header setRefetch={setRefetch} />
      <TodoList refetch={refetch} setRefetch={setRefetch} />

      <div className="container">
        <p>Drag and drop to reorder list</p>
      </div>
    </Fragment>
  );
}

export default App;
