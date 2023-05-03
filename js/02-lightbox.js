import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `;
};
const renderGallery = (items) => {
  const galleryMarkup = items.map(createGalleryItem).join('');
  galleryContainer.innerHTML = galleryMarkup;
};

renderGallery(galleryItems);

const lightbox = new SimpleLightbox(".gallery__link", { captionsData: "alt", captionDelay: "250" });
// import SimpleLightbox from "..node_modules/simplelightbox";
