import React from 'react';
import "./NewItem.css";

const NewItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form className="newItem container" onSubmit={handleSubmit}>
            <button
                type="submit"
                className="checkbox"
                aria-label="Create a new todo"
                onClick={(e) => setNewItem(e.target.value)}
            >

            </button>
            <label htmlFor='addItem' className="sr-only">Create a new todo...</label>
            <input
                id="addItem"
                type="text"
                placeholder="Create a new todo..."
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            >

            </input>

        </form>
    );
};

export default NewItem;