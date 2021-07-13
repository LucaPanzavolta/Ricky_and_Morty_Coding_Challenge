import AuthService from '../../services/auth.service';
import * as actionTypes from '../actions/actionTypes';

/* eslint-disable max-len */

const signInThunk = (formData) => (dispatch) => {
  dispatch({ type: actionTypes.SIGN_IN_REQUEST });

  return AuthService.signIn(formData)
    .then(({ data }) => {
      dispatch({ type: actionTypes.SIGN_IN_SUCCESS, payload: { success: data.success, message: data.message } });
      dispatch({ type: actionTypes.AUTH_VERIFICATION_SUCCESS, payload: data });
      dispatch({ type: actionTypes.UPDATE_FAVOURITE_CHARACTERS_SUCCESS, payload: data.user.favouriteCharacters });
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
