import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

const imgMarcup = createImgMarcup (galleryItems);
container.insertAdjacentHTML('beforeend', imgMarcup);
function createImgMarcup(items) {
  const markup = items.map(({preview, original, description})=> {
  return `
      <a class=“gallery__item” href="${original}" onclick="return false">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
        />
</a>`
  }).join(""); 
  return markup;
  console.log(markup);
};

let gallery = new SimpleLightbox('.gallery a', {captionsData:"alt" , captionDelay: 250});
