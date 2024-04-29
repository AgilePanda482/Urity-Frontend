import axios from "axios";

const instance = axios.create({
    baseURL: APIREST,
    withCredentials: true,
})

export default instance