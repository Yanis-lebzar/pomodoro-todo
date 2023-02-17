import axios, { AxiosResponse } from "axios";

const API_BASE_URL = "http://localhost:8000/todo/";

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const getTodos = async () => {
  try {
    const response: AxiosResponse<Todo[]> = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTodo = async (todo: {}) => {
  try {
    const response: AxiosResponse<Todo> = await axios.post(
      API_BASE_URL + "new",
      todo
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (id: string, todo: {}) => {
  try {
    const response: AxiosResponse<Todo> = await axios.put(
      API_BASE_URL + id,
      todo
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const response: AxiosResponse<Todo> = await axios.delete(API_BASE_URL + id);
    return response.data;
  } catch (error) {
    throw error;
  }
};
