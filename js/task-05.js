const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
}

refs.inputEl.addEventListener('input', onInputHandle);

function onInputHandle(e) {
    if (e.target.value === "") {
        refs.outputEl.textContent = 'Anonymous';
        return;
    }
    refs.outputEl.textContent = e.target.value;
}
