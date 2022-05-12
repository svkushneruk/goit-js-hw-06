const refs = {
    inputEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
}

refs.inputEl.addEventListener('input', onInputChangeHandle);

function onInputChangeHandle(e) {
    refs.textEl.style.fontSize = `${e.target.value}px`;
}