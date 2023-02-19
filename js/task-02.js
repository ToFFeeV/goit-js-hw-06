const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allEl = ingredients => {
  return ingredients.map(ingredient => {
    const newEl = document.createElement('li');
    newEl.classList.add('item');
    newEl.textContent = ingredient;

    return newEl;
  })
}

const elements = allEl(ingredients);

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...elements);