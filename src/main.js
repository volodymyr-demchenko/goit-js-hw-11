import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showErrorToast,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const searchQuery = formData.get('search-text').trim();

  if (searchQuery === '') {
    showErrorToast('Please enter a search query.');
    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        showErrorToast(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        createGallery(data.hits);
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      showErrorToast(
        'An error occurred while fetching images. Please try again later.'
      );
    })
    .finally(() => {
      hideLoader();
    });
});
