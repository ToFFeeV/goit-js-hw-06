let counterValue = 0

const decrementEl = counter.firstElementChild;
const incrementEl = counter.lastElementChild;

const newValue = document.getElementById('value');

decrementEl.addEventListener("click", () => {
    newValue.textContent = counterValue -= 1;
});

incrementEl.addEventListener("click", () => {    
    newValue.textContent = counterValue += 1;
});