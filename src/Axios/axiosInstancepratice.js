import axios from "axios";
import { showLoader, hideLoader } from "./loader";

const axiosInstance = axios.create({
  baseURL: "https://6971d80c32c6bacb12c4b51d.mockapi.io",
});

axiosInstance.interceptors.request.use(
  (config) => {
    showLoader();
    return config;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    hideLoader();
    return response;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

export default axiosInstance;
