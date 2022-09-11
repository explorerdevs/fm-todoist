import axios from "axios";

const API_URL = "";

const createTodo = async todo => {
    try {
        const response = await axios.post(`${API_URL}/todos`, todo);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getAllTodos = async() => {
    try {
        const response = await axios.get(`${API_URL}/todos`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getTodoById = async(id) => {
    try {
        const response = await axios.get(`${API_URL}/todos/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const updateTodo = async(id, todo) => {
    try {
        const response = await axios.put(`${API_URL}/todos/${id}`, todo);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const deleteTodo = async(id) => {
    try {
        const response = await axios.delete(`${API_URL}/todos/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo
}