import axios from "axios";
import { URL_FRONT } from "../config";

const instance = axios.create({
    baseURL: URL_FRONT + "/api",
    withCredentials: true,
})

export default instance