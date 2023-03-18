import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:3000'
})

http.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);
