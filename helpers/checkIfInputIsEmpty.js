import { addTodo } from "./todosData.js";
const input = document.getElementById("add-todo");

let todo = "";

input.addEventListener("input", ({ target }) => (todo = target.value));

export const checkIfInputIsEmpty = () => {
  if (input.validity.valueMissing || todo.trim() === "") {
    input.setCustomValidity("Tiene que ingresar una tarea");
  } else {
    addTodo(todo);
  }
  input.reportValidity();
  input.value = "";
};
