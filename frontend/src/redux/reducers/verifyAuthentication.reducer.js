import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  data: null,
  error: null,
};

const verifyAuthenticationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTH_VERIFICATION_REQUEST:
      return { ...state, isLoading: true };
    case actionTypes.AUTH_VERIFICATION_SUCCESS:
      return {
        ...state, isLoading: false, data: action.payload, error: null,
      };
    case actionTypes.AUTH_VERIFICATION_ERROR:
      return {
        ...state, isLoading: false, data: null, error: action.payload,
      };

    default: return state;
  }
};

export default verifyAuthenticationReducer;
