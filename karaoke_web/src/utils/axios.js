import axios from 'axios';

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API base URL
  // timeout: 10000, // Optional: Set request timeout
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers you need here
  },
});

export default axiosInstance;