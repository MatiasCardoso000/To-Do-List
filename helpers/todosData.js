import { showTodoOnDisplay } from "./showTodoOnDisplay.js";

export let todos = [];

export const addTodo = (todo) => {
  todos.push({ id: Date.now() * 3, title: todo });
};

export const getTodos = () => {
  return todos;
};

export const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  showTodoOnDisplay();
};
