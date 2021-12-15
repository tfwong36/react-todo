import axios from 'axios'

const todoAPI = axios.create({
    baseURL: 'https://61b9880c38f69a0017ce609f.mockapi.io'
});

export default todoAPI;