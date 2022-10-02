import React from 'react';
import DeleteSVG from "./images/icon-cross.svg";
import "./List.css";


const List = ({ items, handleCheck }) => {
  return (
    <>
      {items.length ? (
        <ul className='container'>
          {items.map((item) => (
            <li className="item" key={item.id} >
              <input
                type="checkbox"
                className='checkbox'
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label>{item.item}</label>
              <button
                className='deleteBtn'
                title='Delete item'
                aria-label='Delete Item'
              >
                <img src={DeleteSVG} alt=""></img>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Add todos above</p>
      )}
    </>
  )
}

export default List;