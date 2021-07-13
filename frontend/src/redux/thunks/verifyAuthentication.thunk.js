import * as actionTypes from '../actions/actionTypes';
import AuthService from '../../services/auth.service';

/* eslint-disable max-len */

export const verifyAuthenticationThunk = () => (dispatch) => {
  dispatch({ type: actionTypes.AUTH_VERIFICATION_REQUEST });

  return AuthService.verifyAuthStatus()
    .then(({ data }) => {
      dispatch({ type: actionTypes.AUTH_VERIFICATION_SUCCESS, payload: data });
      dispatch({ type: actionTypes.UPDATE_FAVOURITE_CHARACTERS_SUCCESS, payload: data.user.favouriteCharacters });
    }).catch((error) => {
      if (error.response) {
        dispatch({ type: actionTypes.AUTH_VERIFICATION_ERROR, payload: error.response.data });
      } else {
        dispatch({ type: actionTypes.AUTH_VERIFICATION_ERROR, payload: error });
      }
    });
};

export default verifyAuthenticationThunk;
