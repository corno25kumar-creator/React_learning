import axios from 'axios';
import { showLoader, hideLoader } from "./contextloader";


const axiosInstanceConig = axios.create({
    baseURL: "https://dummyjson.com",
    timeout:5000
})

axiosInstanceConig.interceptors.request.use(
    (config) => {
        showLoader()
        return config
    },
    (error) => {
       hideLoader()
       return Promise.reject(error)
    }
)

axiosInstanceConig.interceptors.response.use(
    (response)=> {
          hideLoader()
        return response
    },
    (error) => {
        hideLoader()
        return Promise.reject(error) 
    }
)


export default axiosInstanceConig