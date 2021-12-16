import axios from 'axios'

const todoAPI = axios.create({
    baseURL: 'http://localhost:8080'
});

export default todoAPI;