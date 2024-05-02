import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_APIREST,
    withCredentials: true,
})

export default instance