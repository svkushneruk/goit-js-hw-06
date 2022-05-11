
const counterEl = document.querySelector('#value');
let counterValue = Number(counterEl.textContent);

function updateValue(counterEl, counterValue) {
    counterEl.textContent = counterValue;
}

const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');

btnDecr.addEventListener('click', () => {
    counterValue -= 1;
    updateValue(counterEl, counterValue);
})
btnIncr.addEventListener('click', () => {
    counterValue += 1;
    updateValue(counterEl, counterValue);
})