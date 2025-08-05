// frontend/src/services/api.js

import axios from 'axios';

// Determine the base URL based on the environment
// React sets process.env.NODE_ENV to 'development' when you run `npm start`
// and to 'production' when you run `npm run build` (which Vercel does).
const apiURL = process.env.NODE_ENV === 'production'
  ? 'https://my-blog-app-72v6.onrender.com/api' // Your live production backend URL
  : 'http://127.0.0.1:8000/api';           // Your local development backend URL

// Create an Axios instance with the dynamic baseURL
const apiClient = axios.create({
    baseURL: apiURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the token in headers
// (This part remains the same)
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Token ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;