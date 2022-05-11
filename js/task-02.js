const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientItem = ingredient => {
  const el = document.createElement('li');
  el.textContent = ingredient;
  el.classList.add('item');
  return el;
};


const elements = ingredients.map(makeIngredientItem);


document.querySelector('#ingredients').append(...elements);