function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
const body = document.body;

btn.addEventListener('click', clickRandomHexColor);

function clickRandomHexColor() {
  textEl.textContent = body.style.backgroundColor = getRandomHexColor();
}