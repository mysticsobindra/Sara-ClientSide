import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.78:3000/', 
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true 
});

export default axiosInstance;