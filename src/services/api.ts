import axios from 'axios';

const api = axios.create({
  baseURL: 'https://628b13ed667aea3a3e26cd26.mockapi.io/brain/api/v1/',
});

export default api;
