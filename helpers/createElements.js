export const createElements = (id) => {
  const todo_item = document.createElement("li");
  const check_input = document.createElement("input");
  const check_label = document.createElement("label");
  const todo_text_label = document.createElement("label");
  const delete_button = document.createElement("button");

  todo_item.className = "todo";
  check_input.type = "checkbox";
  check_input.id = `todo-${id}`;
  check_label.htmlFor = `todo-${id}`;
  check_label.className = "check-todo";
  check_label.innerHTML = `      <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>`;

  todo_text_label.className = "todo-text";
  todo_text_label.htmlFor = `todo-${id}`;

  delete_button.className = "delete-btn";
  delete_button.innerHTML = `  <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
        </svg>`;

  return {
    todo_item,
    check_input,
    check_label,
    todo_text_label,
    delete_button,
  };
};
