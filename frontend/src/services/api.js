import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
    baseURL: 'https://my-blog-backend.onrender.com/api', // <-- Your live backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the token in headers
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