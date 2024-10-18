const todosDisplay = document.querySelector(".todos-container");
const input = document.getElementById("add-todo");
const form = document.querySelector(".add-todo-form");

let todo = "";
let todos = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkIfInputIsEmpty();

  console.log(todos);
  showTodoOnDisplay();
});

input.addEventListener("input", ({ target }) => {
  const todoValue = target.value;
  todo = todoValue;
});

const showTodoOnDisplay = () => {
  const div = document.createElement("div");
  todos.map((todo, i) => {
    div.textContent = `${i + 1} ${
      todo.slice(0, 1).toUpperCase() + todo.slice(1)
    }`;
    div.className = "todo-item";
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
