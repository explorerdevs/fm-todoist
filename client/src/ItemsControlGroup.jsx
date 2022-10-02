import React from 'react';
import "./ItemsControlGroup.css";

const ItemsControlGroup = () => {
  return (
    <div className="items-control-group container">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  )
}

export default ItemsControlGroup;