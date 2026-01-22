import axios from "axios"

const api = axios.create({

  // Base URL for all API requests
  baseURL: "https://api.example.com",

  // Specific URL (usually not needed if baseURL is set)
  url: "",

  // HTTP method for the request
  method: "get", // get, post, put, delete, patch

  // Custom headers (tokens, content-type, etc.)
  headers: {
    "Content-Type": "application/json",
    // Authorization: "Bearer token"
  },

  // Query parameters (?page=1&limit=10)
  params: {
    // page: 1,
    // limit: 10
  },

  // Request body (used in POST, PUT, PATCH)
  data: {
    // name: "Chandan",
    // age: 22
  },

  // Time (in ms) before request is aborted
  timeout: 5000,

  // Send cookies with cross-site requests (sessions/auth)
  withCredentials: false,

  // Expected response type
  responseType: "json", // json, blob, text, arraybuffer

  // Maximum size of response allowed (in bytes)
  maxContentLength: 2000,

  // Maximum size of request body allowed (in bytes)
  maxBodyLength: 2000,

  // Custom logic to treat status codes as success/failure
  validateStatus: function (status) {
    return status < 500 // Resolve only if status < 500
  },

  // Basic authentication (rarely used in frontend)
  auth: {
    username: "",
    password: ""
  },

  // Used to cancel requests (AbortController)
  signal: undefined
})

export default api




// Request interceptor (before request is sent)
api.interceptors.request.use(
  (config) => {
    // Attach token here if needed
    // config.headers.Authorization = "Bearer token"
    console.log("Request sent:", config.url)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor (after response is received)
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error("API Error:", error.response?.status)
    return Promise.reject(error)
  }
)
