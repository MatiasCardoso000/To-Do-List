import { showTodoOnDisplay } from "./showTodoOnDisplay.js";

export let todos = [];

document.addEventListener("DOMContentLoaded", () => {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  if (storedTodos) {
    todos = storedTodos;
    showTodoOnDisplay();
  }
});

export const addTodo = (todo) => {
  todos.push({ id: Date.now() * 3, title: todo });
};

export const getTodos = () => {
  return todos;
};

export const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(todos));
  showTodoOnDisplay();
};
