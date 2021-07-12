import axios from 'axios';
import ApiUrls from '../constants/apiUrls.constants';
import AuthenticatedClient from './AuthenticatedClient';

const storeJwtTokenInLocalStorage = (response) => {
  localStorage.setItem('token', response.data.token);
  return response;
};

const AuthService = {
  signUp(formData) {
    return axios({
      method: 'post',
      url: ApiUrls.signUp,
      data: formData,
    });
  },
  signIn(formData) {
    return axios({
      method: 'post',
      url: ApiUrls.signIn,
      data: formData,
    })
      .then(storeJwtTokenInLocalStorage);
  },
  verifyAuthStatus() {
    return AuthenticatedClient({
      method: 'get',
      url: ApiUrls.verifyToken,
    });
  },
};

export default AuthService;
