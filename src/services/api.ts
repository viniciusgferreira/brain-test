import axios from 'axios';

const api = axios.create({
  baseURL: 'https://4d80-177-55-195-175.sa.ngrok.io/',
});

export default api;
