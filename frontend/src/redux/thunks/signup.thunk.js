import * as actionTypes from '../actions/actionTypes';
import AuthService from '../../services/auth.service';

const signUpThunk = (formData) => (dispatch) => {
  dispatch({ type: actionTypes.SIGN_UP_REQUEST });

  return AuthService.signUp(formData)
    .then(({ data }) => {
      dispatch({ type: actionTypes.SIGN_UP_SUCCESS, payload: data });
    }).catch((error) => {
      if (error.response) {
        dispatch({ type: actionTypes.SIGN_UP_ERROR, payload: error.response.data });
      } else {
        dispatch({ type: actionTypes.SIGN_UP_ERROR, payload: error });
      }
      throw new Error(error);
    });
};

export default signUpThunk;
