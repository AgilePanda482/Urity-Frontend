import axios from "./axios.js";

export const loginRequest = (user) => axios.post(`auth/login`, user);
export const verifyTokenRequest = () => axios.get(`auth/verify`);

///api/auth/login