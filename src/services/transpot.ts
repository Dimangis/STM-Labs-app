import axios from 'axios';

export const baseTransport = axios.create({
  baseURL: 'https://b7cf57bfc748c4cc.mokky.dev',
  timeout: 3000,
});

export const get = baseTransport.get;
