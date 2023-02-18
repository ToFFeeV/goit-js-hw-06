const fontSize = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function textFontSize(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}

fontSize.addEventListener('input', textFontSize);