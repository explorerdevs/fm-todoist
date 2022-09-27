import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Header />

        <div id="todoList">
          <div id="listItems"></div>
          <div id="todoControls">
            <div className="control-info">
              <p>
                <span id="numberOfItems">5</span> items left
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

        <div id="reorderList">Drag and drop to reorder list</div>
    

      <Footer />
    </React.Fragment>
  );
}

export default App;
