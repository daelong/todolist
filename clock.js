const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-title");

function getTime() {
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }:${second < 10 ? `0${second}` : second}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
