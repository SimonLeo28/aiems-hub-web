// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5173', // Base URL for your API
  timeout: 5000, // Set a timeout limit
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (axios.isCancel(error)) {
      return Promise.reject({ message: 'Request canceled by user', ...error });
    } else if (error.code === 'ECONNABORTED') {
      return Promise.reject({ message: 'Request timeout', ...error });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;