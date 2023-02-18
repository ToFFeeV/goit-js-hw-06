const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function getInputValue() {
    if (input.value !== '') {
        output.textContent = input.value;
    } else {
        output.textContent = 'Anonymous';
    }
}

input.addEventListener("input", getInputValue);