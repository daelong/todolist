//내용, 작성자, 날짜, 완료 여부?

// const form = document.querySelector(".inputList_box");
// const inputList = form.querySelector(".inputList");
// const USER_CHECK = "currentUser";

// function makeData(todo, day) {} 이건 node.js하고 나서 데이터 받은 걸 json에 저장하고 불러서 사용할수 있게 만들기
// console.log(todo);
//   const today = new Date();
//   const years = today.getFullYear();
//   const months = today.getMonth();
//   const days = today.getDate();
//   const enrollDay = `${years}.${months}.0${days}`;
//   console.log(enrollDay);
//   makeData(todo, enrollDay);

const toDoForm = document.querySelector(".inputList_box");
const toDoList = document.querySelector(".inputList");
const toDo = document.querySelector(".greetings");
let toDos = [];

const TODOS_LS = "toDos";

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDo.removeChild(li);
  const cleanToDos = toDos.filter(function (todo) {
    return todo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function makeToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = toDos.length + 1;
  toDo.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmitList(event) {
  event.preventDefault();
  const todo = toDoList.value;
  makeToDo(todo);
}

function checkUser() {
  const loadedToDo = localStorage.getItem(TODOS_LS);
  if (loadedToDo !== null) {
    const parsedToDos = JSON.parse(loadedToDo);
    parsedToDos.forEach(function (todo) {
      makeToDo(todo.text);
    });
  }
}

function init() {
  checkUser();
  toDoForm.addEventListener("submit", handleSubmitList);
}
init();

// 인풋에 입력하고 submit하면 정보를 저장, 작성자에 따라서 다른 todoList를 보여줘야하고, 날짜에 따라서 다른 todoList를 보여줘야해
// todoList는 등록, 삭제, 수정, 완료가 가능해야함
// 1. 등록 : input으로 정보를 받아와서 json으로 만들어주기
