import axios from 'axios'

export const api = axios.create({
    baseURL:'http://18.117.190.114:8085/',
    timeout: 10000
})