const Todo = require("../models/Todo");

const fetchTodos = async (req, res) => {
  const todos = await Todo.find().lean();
  if (!todos?.length) {
    return res.status(404).json({ message: "No todos found" });
  }

  res.send(todos);
};

const findTodoById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Todo ID required" });
  }

  const todo = await Todo.findById(id).exec();
  if (!todo) {
    return res
      .status(400)
      .json({ message: `The todo with the id ${id} does not exist` });
  }

  res.send(todo);
};

const createTodo = async (req, res) => {
  const { todo } = req.body;
  if (!todo) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Create and store the new todo
  const createdTodo = await Todo.create({ text: todo });
  createdTodo
    ? res.status(201).json({ message: "New todo created" })
    : res.status(400).json({ message: "Invalid data received" });
};

const updateTodo = async (req, res) => {
  const {id} = req.params;
  const { todo, completed } = req.body;
  if (!id || !todo || typeof completed !== "boolean") {
    return res.status(400).json({ message: "All fields are required" });
  }

  const todoToUpdate = await Todo.findById(id).exec();
  if (!todoToUpdate) {
    return res
      .status(400)
      .json({ message: `The todo with the id ${id} does not exist` });
  }

  todoToUpdate.text = todo;
  todoToUpdate.completed = completed;

  const updatedTodo = await todoToUpdate.save();
  res
    .status(200)
    .json({ message: `The todo with id: "${updatedTodo?._id}" is updated` });
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Todo ID required" });
  }

  // Confirm that the todo to be deleted exists
  const todo = await Todo.findById(id).exec();
  if (!todo) {
    return res
      .status(400)
      .json({ message: `The todo with the id ${id} does not exist` });
  }

  await Todo.deleteById(id);
  res.status(200).json({ message: `The todo with the ID ${id} is deleted` });
};

module.exports = {
  fetchTodos,
  findTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
