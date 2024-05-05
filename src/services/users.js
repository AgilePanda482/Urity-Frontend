import axios from "./axios.js";

export const homeAccess = async () => axios.get(`/users/logs`); 

export const createUser = async (user) => axios.post(`/users/create`, user);

export const getAll =  async () => axios.get(`/users/getAll`);

export const deleteUser = async (id) => axios.delete(`/users/delete/${id}`);

export const getUserById = async (id) => axios.get(`/users/userByID/${id}`);

export const updateUser = async (id, user) => axios.put(`/users/updateUser/${id}`, user)