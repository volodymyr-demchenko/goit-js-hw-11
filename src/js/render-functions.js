import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const galleryEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox;

export const createGallery = images => {
  const markup = images
    .map(
      image =>
        `<li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <div class="info">
          <p>
            <b>Likes</b> ${image.likes}
          </p>
          <p>
            <b>Views</b> ${image.views}
          </p>
          <p>
            <b>Comments</b> ${image.comments}
          </p>
          <p>
            <b>Downloads</b> ${image.downloads}
          </p>
        </div>
      </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
};

export const clearGallery = () => {
  galleryEl.innerHTML = '';
};

export const showLoader = () => {
  loader.style.display = 'block';
};

export const hideLoader = () => {
  loader.style.display = 'none';
};

export function showErrorToast(message) {
  iziToast.error({
    message: message,
    position: 'topRight',
  });
}
