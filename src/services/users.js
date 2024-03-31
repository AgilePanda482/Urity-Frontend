import axios from "./axios.js";

export const createUser = (user) => axios.post(`user/create`, user);
