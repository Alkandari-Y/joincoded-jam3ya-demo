import axios from 'axios'

const api = axios.create({
    baseURL: 'https://coded-miniproject-jam3ya-be.herokuapp.com/'
})

export default api;

