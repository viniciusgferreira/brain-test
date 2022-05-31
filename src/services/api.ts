import axios from 'axios';

const api = axios.create({
  baseURL: 'https://62965da175c34f1f3b2e8c73.mockapi.io//brain/api/v1/',
});

export default api;
