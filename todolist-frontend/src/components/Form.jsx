import React from 'react'

const Form = () => {
  return (
    <form id="newTodo">
      <button className="checkbox"></button>
      <input
        type="text"
        name="newItem"
        id="newItem"
        placeholder="Create a new todo..."
        required
      />
    </form>
  )
}

export default Form