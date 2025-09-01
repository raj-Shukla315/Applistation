import axios from "axios";

 const axiosUpload = axios.create({
    baseURL:"http://localhost:8080/upload",
    headers:{
        "Content-Type":"multipart/form-data",
    },
}) ;

//protected
axiosUpload.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosUpload;