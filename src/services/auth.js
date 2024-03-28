import axios from "axios";

const API = "http://localhost:4000/api/auth/";

export const loginRequest = (user) => axios.post(`${API}login`, user);

///api/auth/login