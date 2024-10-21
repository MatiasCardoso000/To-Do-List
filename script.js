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

input.addEventListener("input", ({ target }) => (todo = target.value));

const showTodoOnDisplay = () => {
  const { div, deleteBtn, checkTodo, img, todoItem, label } = createElements();
  todos.forEach((todo) => {
    todoItem.textContent = `${
      todo.title.slice(0, 1).toUpperCase() + todo.title.slice(1)
    }`;
    label.appendChild(checkTodo);
    div.append(todoItem, label, deleteBtn);
    img.setAttribute("src", "./icon/compartimiento.png");
    deleteBtn.append(img);
    deleteBtn.addEventListener("click", deleteTodo(todo.id));
    todosDisplay.append(div);
  });
};

const createElements = () => {
  const div = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const label = document.createElement("label");
  const checkTodo = document.createElement("input");
  const img = document.createElement("img");
  const todoItem = document.createElement("p");
  label.className = "check-todo";
  deleteBtn.className = "delete-btn";
  todoItem.className = "todo";
  div.className = "todo-item";
  checkTodo.type = "checkbox";

  return {
    div,
    deleteBtn,
    checkTodo,
    img,
    todoItem,
    label,
  };
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

const deleteTodo = (id) => todos.filter((todo) => todo.id !== id);

//TODO: Crear botones para eliminar tareas de la lista y marcar cuando estan hechas.
