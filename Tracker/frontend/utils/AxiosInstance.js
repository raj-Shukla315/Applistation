import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/myapplications', // change to your deployed URL if needed
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token from localStorage on every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

