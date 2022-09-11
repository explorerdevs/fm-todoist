import React, { useState, useEffect } from "react";
import api from "./api";

function App() {

  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);
  const [refetch,setRefetch] = useState(false);

  useEffect(() => {
    const fetchTodos = async ()=>{
      const response = await api.get("/todos");
      setTodos(response);
    }

    fetchTodos();
    setRefetch(false);
    }, [refetch]);

  const createTodo = async () => {
    const response = await api.post("/todo", {
      todo:{
        todoTex: todo,
        completed: false
        }
      });

    setTodos(todos => [...todos, todo])
    setTodo("");
  }

  const handleCompleted = async (todo) => {
    const response = api.updateTodo(todo.id,{...todo, completed: !todo.completed})
    refetch(true);
  }

  const handleDelete = async (id) => {
    const response = await api.deleteTodo(id);
    refetch(true);
  }

  return (
    <React.Fragment>
      <div id="app"></div>

      <header>
        <div className="container">
          <h1>Todo</h1>
          <button id="toggle" title="Change light/dark mode">
            <img src="./images/icon-moon.svg" alt="light/dark mode toggle" />
          </button>
        </div>
      </header>
      <div className="container">
        <form id="newTodo">
          <input
            onKeyDown={e => e.key === 'Enter' && createTodo}
            value={todo}
            onChange={e => setTodo(e.target.value)}
            type="text"
            name="newItem"
            id="newItem"
            placeholder="Create a new todo..."
            required
          />
        </form>

        <div id="todoList">
          <div id="listItems">
            {
              todos.map((todo) => {
              <div><button className="checkbox" onClick={e=>handleCompleted(todo)} value={todo.completed}></button><p>{todo.todoText}</p></div>
              })
            }
          </div>
          <div id="todoControls">
            <div className="control-info">
              <p>
                <span id="numberOfItems">{todos.length}</span> items left
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
      </div>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Jolene Kearse</a>,
        <a href="https://www.ashmoreno.dev" target="_blank">
          Ash Moreno
        </a>
        ,
        <a href="https://wfeliciano20.github.io/Portfolio/" target="_blank">
          William Rios
        </a>
        , and <a href="https://github.com/princemuel">Samuel Chukwuzube</a>.
      </div>
    </React.Fragment>
  );
}

export default App;
