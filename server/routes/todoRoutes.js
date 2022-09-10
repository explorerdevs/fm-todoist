const express = require("express");
const {
  fetchTodos,
  findTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos");

const todosRouter = express.Router();

todosRouter.get("/", fetchTodos);
todosRouter.get("/:id", findTodoById);
todosRouter.post("/", createTodo);
todosRouter.put("/:id", updateTodo);
todosRouter.delete("/:id", deleteTodo);

module.exports = todosRouter;
