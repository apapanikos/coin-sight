import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/", // CoinGecko API base URL
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors if needed (for authentication, logging, etc.)
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request config before sending it, like adding auth tokens
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // You can handle errors globally here
    return Promise.reject(error);
  }
);

export default axiosInstance;
