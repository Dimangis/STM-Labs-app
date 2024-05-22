import axios from 'axios';

export const baseTransport = axios.create({
  baseURL: 'https://randomuser.me/',
  timeout: 3000,
});

export const get = baseTransport.get;
export const post = baseTransport.post;
