import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "http://51.136.51.121/drupal-app/web",
  timeout: 10000, 
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default axiosInstance;
