import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>
  `;
};
const renderGallery = (galleryItems) => {
  const galleryMarkup = galleryItems.map(createGalleryItem).join('');
  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
};
renderGallery(galleryItems);
// console.log(galleryItems);
galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();
    const galleryItem = event.target.closest('.gallery__item');
    if (!galleryItem) return;
    const imageSrc = galleryItem.querySelector('.gallery__image').dataset.source;
    const instance = basicLightbox.create(`
      <img src="${imageSrc}" width="800" height="600">
    `);
    instance.show();
  });



