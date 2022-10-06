import React from 'react';
import "./ToDoControls.css";

const ToDoControls = () => {
  return (
    <div id="todoControls">
      <div className="control-info container">
        <p>
          <span id="numberOfItems">3</span> items left
        </p>
        <button>Clear Completed</button>
      </div>
    </div>
  )
}

export default ToDoControls;