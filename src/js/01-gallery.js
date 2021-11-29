// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const samplesMarkup = createGallerySample(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', samplesMarkup);

function createGallerySample(sample) {
  return sample
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" 
        href="${original}">
        <img 
          class="gallery__image" 
          src="${preview}" 
          alt="${description}" 
        />
      </a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'outside',
  captionDelay: 250,
});
