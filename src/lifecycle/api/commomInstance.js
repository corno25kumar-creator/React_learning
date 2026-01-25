import axios from "axios";

const commonInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    timeout:5000
})

export default commonInstance