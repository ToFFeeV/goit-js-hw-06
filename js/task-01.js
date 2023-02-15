//All categories.
const allLinksEl = categories.querySelectorAll('.item');
console.log('Number of categories:', allLinksEl.length);

//First element.

const firstEl = categories.firstElementChild;
console.log("Category:", firstEl.firstElementChild.textContent);

const navLastEl = firstEl.lastElementChild;
console.log("Elements:", navLastEl.children.length);

//Second element.

const secondEl = categories.firstElementChild.nextElementSibling;
console.log("Category:", secondEl.firstElementChild.textContent);

const secondLastEl = secondEl.lastElementChild;
console.log("Elements:", secondLastEl.children.length);

//Third element.

const thirdEl = categories.lastElementChild;
console.log("Category:", thirdEl.firstElementChild.textContent);

const thirdLastEl = thirdEl.lastElementChild;
console.log("Elements:", thirdLastEl.children.length);