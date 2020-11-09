// async function check() {
//   const todoForm = document.todoForm;
//   const todo = todoForm.todo.value;
//   console.log(todo);
// }
const title = document.querySelector("#title");
const clickedCheck = "clicked";

function changeTitle() {
  title.classList.toggle(clickedCheck);
}

function init() {
  title.addEventListener("click", changeTitle);
}
init();
