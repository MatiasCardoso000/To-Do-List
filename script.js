const todosDisplay = document.querySelector(".todos-container");
const input = document.getElementById("add-todo");
const form = document.querySelector(".add-todo-form");

let todo = "";
let todos = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todos.length === 15) return;
  checkIfInputIsEmpty();

  showTodoOnDisplay();
});

input.addEventListener("input", ({ target }) => {
  const todoValue = target.value;
  todo = todoValue;
});

const showTodoOnDisplay = () => {
  const div = document.createElement("div");
  const divisor = document.createElement("div");
  todos.map((todo) => {
    div.textContent = `${todo.slice(0, 1).toUpperCase() + todo.slice(1)}`;
    div.className = "todo-item";
    divisor.className = "divisor";
    todosDisplay.append(div);
  });
};

const checkIfInputIsEmpty = () => {
  if (input.validity.valueMissing) {
    input.setCustomValidity("Tiene que ingresar un todo");
    todos = [];
  } else {
    input.setCustomValidity("");
    todos.push(todo);
  }
  input.reportValidity();
};
