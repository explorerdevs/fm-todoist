const express = require("express");
const {
  fetchTodos,
  findTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos");

const todosRouter = express.Router();

todosRouter.get("/", fetchTodos).post("/", createTodo);

todosRouter
  .get("/:id", findTodoById)
  .put("/:id", updateTodo)
  .delete("/:id", deleteTodo);

module.exports = todosRouter;
