import axios from 'axios';

const {
  REACT_APP_BACKEND_SERVER_HOST: backendHost,
  REACT_APP_BACKEND_SERVER_PORT: backendPort,
} = process.env;

const apiUrls = {
  baseUrl: `http://${backendHost}:${backendPort}`,
  get signUp() { return `${this.baseUrl}/signup`; },
};

const AuthService = {
  signUp(formData) {
    return axios({
      method: 'post',
      url: apiUrls.signUp,
      data: formData,
    });
  },
};

export default AuthService;
