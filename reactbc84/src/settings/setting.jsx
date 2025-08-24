import axios from 'axios';


export const httpClientStoreApi = axios.create({
    baseURL: 'https://apistore.cybersoft.edu.vn/api',
    timeout: 30000
});