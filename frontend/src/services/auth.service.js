import axios from 'axios';

const {
  REACT_APP_BACKEND_SERVER_HOST: backendHost,
  REACT_APP_BACKEND_SERVER_PORT: backendPort,
} = process.env;

const apiUrls = {
  baseUrl: `http://${backendHost}:${backendPort}`,
  get signUp() { return `${this.baseUrl}/signup`; },
  get signIn() { return `${this.baseUrl}/signin`; },
};

const storeJwtTokenInLocalStorage = (data) => {
  localStorage.setItem('token', data.token);
  return data;
};

const AuthService = {
  signUp(formData) {
    return axios({
      method: 'post',
      url: apiUrls.signUp,
      data: formData,
    });
  },
  signIn(formData) {
    return axios({
      method: 'post',
      url: apiUrls.signIn,
      data: formData,
    })
      .then(storeJwtTokenInLocalStorage);
  },
};

export default AuthService;
