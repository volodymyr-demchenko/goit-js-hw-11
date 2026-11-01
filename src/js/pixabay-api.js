import axios from 'axios';

const API_KEY = '58352311-c8b47a53d3fe418784f118997';
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = query => {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
};
