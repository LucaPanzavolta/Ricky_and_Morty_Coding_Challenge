import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  data: null,
  error: null,
};

const signupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_REQUEST:
      return { ...state, isLoading: true };
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state, isLoading: false, data: action.payload, error: null,
      };
    case actionTypes.SIGN_UP_ERROR:
      return {
        ...state, isLoading: false, data: null, error: action.payload,
      };

    default: return state;
  }
};

export default signupReducer;
