const todosDisplay = document.querySelector(".todos-container");
const input = document.getElementById("add-todo");
const form = document.querySelector(".add-todo-form");

let todo = "";
let todos = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todos.length === 11) return;
  if (todos.some((t) => t.title === todo)) return;
  checkIfInputIsEmpty();
  showTodoOnDisplay();
});

input.addEventListener("input", ({ target }) => {
  const todoValue = target.value;
  todo = todoValue;
});

const showTodoOnDisplay = () => {
  const div = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const img = document.createElement("img");
  const todoItem = document.createElement("p");
  const divisor = document.createElement("div");
  todos.forEach((todo) => {
    todoItem.textContent = `${
      todo.title.slice(0, 1).toUpperCase() + todo.title.slice(1)
    }`;
    div.append(todoItem, deleteBtn);
    img.setAttribute("src", "/icon/compartimiento.png");
    deleteBtn.append(img);
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", deleteTodo(todo.id));
    todoItem.className = "todo";
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
    todos.push({ id: Date.now(), title: todo });
  }
  input.reportValidity();
  input.value = "";
};

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== todo.id);
  showTodoOnDisplay();
}

//TODO: Crear botones para eliminar tareas de la lista y marcar cuando estan hechas.
