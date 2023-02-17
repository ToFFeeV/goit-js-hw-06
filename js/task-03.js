const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector('.gallery');

const allEl = images
  .map(({ url, alt }) => `<li> <img src="${url}" alt="${alt}" width = "300" height = "auto"></li>`)
  .join(" ");

galleryEl.insertAdjacentHTML("afterbegin", allEl);

console.log(galleryEl);




// const allEl = images => {
//   return images.map(image => {
//     const imageEl = document.createElement('img');
//     imageEl.src = image.url;
//     imageEl.alt = image.alt;
//     imageEl.width = 300;

//     return imageEl;
//   })
// }

// const elements = allEl(images);

// const galleryEl = document.querySelector('.gallery');
// galleryEl.width = 1200;
// galleryEl.style.display = "grid";
// galleryEl.append(...elements);

// console.log(galleryEl);