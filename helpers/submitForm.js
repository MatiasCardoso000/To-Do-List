import { checkIfInputIsEmpty } from "./checkIfInputIsEmpty.js";
import { showTodoOnDisplay } from "./showTodoOnDisplay.js";
import { todos } from "./todosData.js";

const form = document.querySelector(".add-todo-form");

let todo = "";

export const submitForm = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (todos.length === 11) return;
    if (todos.some((t) => t.title === todo)) return;

    checkIfInputIsEmpty();
    showTodoOnDisplay();
  });
};
