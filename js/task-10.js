function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  refs.outBoxEl.innerHTML = ""; // Додав, щоб була можливість ввести нове значення в інпут й отримати новий результат без попереднього
  const res = []
  const minWidth = 30;
  const minHeight = 30;

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${minWidth*(i+1)}px`;
    divEl.style.height = `${minHeight*(i+1)}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    res.push(divEl);
  }
  refs.outBoxEl.append(...res);
}

function destroyBoxes() {
  refs.outBoxEl.innerHTML = "";
}

const refs = {
  controlsEl: document.querySelector('#controls'),
  btnCreateEl: document.querySelector('[data-create]'),
  btnDestroyEl: document.querySelector('[data-destroy]'),
  inputEl: document.querySelector('input[type="number"]'),
  outBoxEl: document.querySelector('#boxes'),
}

refs.btnCreateEl.addEventListener('click', () => {
  createBoxes(Number(refs.inputEl.value));
}); 

refs.btnDestroyEl.addEventListener('click', destroyBoxes);



