function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');
boxes.style.display = 'flex';  
boxes.style.flexWrap = 'wrap';
boxes.style.alignItems = 'center';

createBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  const boxesArr = [];
  let size = 20;  
  amount = input.value;

  for (let i = 0; i < amount; i += 1) {
    size += 10;    
    const div = `<div class="item" style="display: block; margin: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }

  boxes.insertAdjacentHTML('beforeend', boxesArr.join(''));
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}