import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <h1>Hello World {count}</h1>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Increase
      </button>
    </React.Fragment>
  );
}

export default App;
