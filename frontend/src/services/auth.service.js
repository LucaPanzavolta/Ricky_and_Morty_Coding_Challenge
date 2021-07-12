import axios from 'axios';
import ApiUrls from '../constants/apiUrls.constants';

const storeJwtTokenInLocalStorage = (data) => {
  localStorage.setItem('token', data.token);
  return data;
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
};

export default AuthService;
