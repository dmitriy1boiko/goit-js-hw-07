import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

container.addEventListener("click", onContainerClick);

function onContainerClick (evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instanceImg = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
  `);
  instanceImg.show();
  document.addEventListener("keydown", event => {
    if(event.key === "Escape") {
      instanceImg.close();
    }
  });
}

const imgMarcup = createImgMarcup (galleryItems);
container.insertAdjacentHTML('beforeend', imgMarcup);
function createImgMarcup(items) {
  const markup = items.map(({preview, original, description})=> {
  return `
  <div class="gallery__item">
      <a class="gallery__link" href="${original}" onclick="return false">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
        />
</a>
</div>`
  }).join(''); 
  return markup;
}


