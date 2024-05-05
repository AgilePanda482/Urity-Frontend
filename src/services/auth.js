import axios from "./axios.js";

export const loginRequest = async (user) => axios.post("/auth/login", user);
export const verifyTokenRequest = async () => axios.get("/auth/verify");

///api/auth/login