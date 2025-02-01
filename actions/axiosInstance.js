import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://qr678.ivdata.in/api", // Replace with your API base URL
  // timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response, // Pass successful responses as-is
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
