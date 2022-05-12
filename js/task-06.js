const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidateInput);

function onValidateInput(e) {
    const inputValueLength = Number(e.target.value.length);

    e.target.classList.remove('valid', 'invalid');    

    if (inputValueLength === Number(e.target.dataset.length)) {
        e.target.classList.add('valid');
    } else {
         e.target.classList.add('invalid');
    }
}
