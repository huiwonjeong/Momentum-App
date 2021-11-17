const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(evnet) {
  evnet.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(userName);
}

function paintGreeting(userName) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `Hello! ${userName}`;
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreeting(savedUsername);
}
