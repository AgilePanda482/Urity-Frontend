import axios from 'axios';

const URL = 'http://localhost:4000/api/user';

export const createUser = user => axios.post(`${URL}/create`, user)