import { createElements } from "./createElements.js";
import { deleteTodo, todos } from "./todosData.js";

const todo_list = document.querySelector(".todo-list");

export const showTodoOnDisplay = () => {
  todo_list.innerHTML = "";

  todos.forEach((todo, i) => {
    const {
      todo_item,
      check_input,
      check_label,
      todo_text_label,
      delete_button,
    } = createElements(todo.id);

    delete_button.addEventListener("click", () => deleteTodo(todo.id));

    todo_text_label.textContent = `${
      todo.title.slice(0, 1).toUpperCase() + todo.title.slice(1)
    }`;

    check_input.addEventListener("change", () => {
      if (check_input.checked) {
        todo_text_label.style.textDecoration = "line-through";
        check_label.firstElementChild.style.fill = "rgb(59, 233, 6)";
      } else {
        todo_text_label.style.textDecoration = "";
        check_label.firstElementChild.style.fill = "";
      }
    });

    todo_item.append(check_input, check_label, todo_text_label, delete_button);
    todo_list.appendChild(todo_item);
  });
};
