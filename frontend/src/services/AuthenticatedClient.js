import axios from 'axios';

const AuthenticatedClient = axios.create();

AuthenticatedClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // eslint-disable-line
  }
  return config;
});

export default AuthenticatedClient;
