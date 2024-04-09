import axios from "./axios.js";

export const createUser = (user) => axios.post(`users/create`, user);

export const getAll =  async () => axios.get(`users/getAll`);

export const deleteUser = (id) => axios.delete(`users/delete/${id}`);

// export const updateUser = (id, user) => axios.put(`users/update/${id}`, user)