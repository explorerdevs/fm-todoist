import axios from "axios";

const API_URL = "https://fm-todoist.up.railway.app/api/v1/todos";
//const API_URL = "http://localhost:3500/api/v1/todos";

const createTodo = async (todo) => {
  try {
    const response = await axios.post(`${API_URL}`, todo);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllTodos = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getTodoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (id, todo) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, todo);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
