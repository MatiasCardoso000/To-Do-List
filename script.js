const input = document.getElementById("add-todo");
const form = document.querySelector(".add-todo-form");
const todo_list = document.querySelector(".todo-list");
const todo_item = document.querySelector(".todo");
const check_todo = document.querySelector(".check-todo");
const todo_text = document.querySelector(".todo-text");
const delete_button = document.querySelector(".delete-btn");

let todo = "";
let todos = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todos.length === 11) return;
  if (todos.some((t) => t.title === todo)) return;

  checkIfInputIsEmpty();
  showTodoOnDisplay();
});

input.addEventListener("input", ({ target }) => (todo = target.value));

const showTodoOnDisplay = () => {
  todos.forEach((todo, i) => {
    todo_text.textContent = `${
      todo.title.slice(0, 1).toUpperCase() + todo.title.slice(1)
    }`;
    todo_item.style.opacity = 1;
    delete_button.addEventListener("click", () => deleteTodo(todo.id));

    todo_item.append(check_todo, todo_text, delete_button);
  });
};

const checkIfInputIsEmpty = () => {
  if (input.validity.valueMissing || todo.trim() === "") {
    input.setCustomValidity("Tiene que ingresar una tarea");
    todos = [];
  } else {
    todos.push({ id: Date.now(), title: todo });
  }
  input.reportValidity();
  input.value = "";
  todo = "";
};

function deleteTodo(id) {
  return todos.filter((todo) => todo.id !== id);
}
