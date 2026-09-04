import axios from 'axios';

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

// Categories

export const fetchCategories = async () => {
    const response = await axios.get(`${API_BASE_URL}/categories/`);
    return response.data;

};

export const createCategory = async (name) => {
    const response = await axios.post(`${API_BASE_URL}/categories/`, { name });
    return response.data;
};

// Tasks

export const fetchTasks = async () => {
    const response = await axios.get(`${API_BASE_URL}/tasks/`);
    return response.data;
};

export const createTask = async (taskData) => {
    const response = await axios.post(`${API_BASE_URL}/tasks/`, taskData);
    return response.data;
};

export const updateTask = async (id, taskData) => {
    const response = await axios.patch(`${API_BASE_URL}/tasks/${id}/`, taskData);
    return response.data;
};

export const deleteTask = async (id) => {
    await axios.delete(`${API_BASE_URL}/tasks/${id}/`);
};

