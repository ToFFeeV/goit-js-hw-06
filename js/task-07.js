const fontSize = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSize.addEventListener('input', textFontSize);

function textFontSize(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}