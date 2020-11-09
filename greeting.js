const form = document.querySelector(".inputName_box");
const formq = document.querySelector(".inputList_box");
const inputName = form.querySelector(".inputName");
const inputList = formq.querySelector(".inputList");
const showing = "showing",
  hide = "hide";

const greeting = document.querySelector(".js-greetings");
const todoList = document.querySelector(".greetings");
const USER_CHECK = "currentUser";

function saveUser(text) {
  localStorage.setItem(USER_CHECK, text);
}

function handleSubmitName() {
  //   event.preventDefault();
  console.log("check2");
  const currentUser = inputName.value;
  console.log(currentUser);
  saveUser(currentUser);
  paintGreeting(currentUser);
}

function paintGreeting(text) {
  form.classList.add("hide");
  formq.classList.remove("hide");
  formq.classList.add("showing");
  greeting.innerText = `hello ${text}`;
  greeting.classList.remove("hide");
  greeting.classList.add("showing");
  todoList.classList.remove("hide");
  todoList.classList.add("showing");
}

function askUserName() {
  console.log("check1");
  form.classList.add("showing");
  form.addEventListener("submit", handleSubmitName);
  //   form.addEventListener("submit", handleSubmitName);
}

function checkUser() {
  const user = localStorage.getItem(USER_CHECK);
  if (user === null) {
    console.log("check");
    askUserName();
  } else {
    paintGreeting(user);
  }
}
function init() {
  checkUser();
}
init();
