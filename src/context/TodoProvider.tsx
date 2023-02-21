"use client";

import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { getTodos, createTodo } from "../pages/api/todo-api";

interface Todo {
  title: string;
  description?: string;
  _id?: string;
  completed?: boolean;
}

interface ContextProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  todoId: string;
  setTodoId: Dispatch<SetStateAction<string>>;
}

const TodoContext = createContext<ContextProps>({
  todos: [],
  setTodos: () => {},
  todoId: "",
  setTodoId: () => "",
});

interface TodoProviderProps {
  children: React.ReactNode;
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([{ title: "Add a task" }]);
  const [todoId, setTodoId] = useState("");
  const [isTaskComplet, setIsTaskCompleted] = useState<boolean>(false);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos();

        setTodos(response.reverse());
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodos();
  }, [todos.length]);

  const contextValue = {
    todos,
    setTodos,
    setTodoId,
    todoId,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
