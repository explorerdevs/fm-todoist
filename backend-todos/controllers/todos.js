const Todo = require("../models/Todo");

const fetchTodos = async(req, res) => {
    const todos = await Todo.find({});
    res.send(todos);
};

const findTodoById = async(req, res) => {
    const { id } = req.body;
    const todo = await Todo.findById(id);
    res.send(todo);
};

const createTodo = async(req, res) => {
    const { todo } = req.body;
    const createdTodo = new Todo(todo);
    await createdTodo.save();
    res.status(201).send(createdTodo);
};

const updateTodo = async(req, res) => {
    const { id, todo } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, todo);
    res.send(updatedTodo);
};

const deleteTodo = (req, res) => {
    const { id } = req.body;
    Todo.findByIdAndDelete(id);
    res.sendStatus(204);
};

module.exports = {
    fetchTodos,
    findTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
};