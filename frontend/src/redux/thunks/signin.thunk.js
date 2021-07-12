import * as actionTypes from '../actions/actionTypes';
import AuthService from '../../services/auth.service';

const signInThunk = (formData) => (dispatch) => {
  dispatch({ type: actionTypes.SIGN_IN_REQUEST });

  return AuthService.signIn(formData)
    .then(({ data }) => {
      dispatch({ type: actionTypes.SIGN_IN_SUCCESS, payload: data });
    }).catch((error) => {
      if (error.response) {
        dispatch({ type: actionTypes.SIGN_IN_ERROR, payload: error.response.data });
      } else {
        dispatch({ type: actionTypes.SIGN_IN_ERROR, payload: error });
      }
      throw new Error(error);
    });
};

export default signInThunk;
