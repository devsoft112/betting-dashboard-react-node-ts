import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

api.interceptors.response.use(
  response => response,
  error => {
    const message = error.response?.data?.message || 'An error occurred. Please try again.';
    toast.error(message);
    return Promise.reject(error);
  }
);

export default api;
