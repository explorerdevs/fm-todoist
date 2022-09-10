import React, { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <h1>Todo</h1>
      <button id="toggle" title="Change light/dark mode">
        <img src="./images/icon-moon.svg" alt="" />
      </button>
    </React.Fragment>
  );
}

export default App;
