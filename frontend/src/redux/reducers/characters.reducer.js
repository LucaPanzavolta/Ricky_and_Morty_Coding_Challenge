import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  list: {
    isLoading: false,
    data: [],
    error: null,
  },
  favourites: {
    isLoading: false,
    data: [],
    error: null,
  },
};

const charactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_CHARACTERS_REQUEST:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
        },
      };
    case actionTypes.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        list: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case actionTypes.GET_CHARACTERS_ERROR:
      return {
        ...state,
        list: {
          isLoading: false,
          data: [],
          error: action.payload,
        },
      };

    case actionTypes.UPDATE_FAVOURITE_CHARACTERS_REQUEST:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          isLoading: true,
        },
      };
    case actionTypes.UPDATE_FAVOURITE_CHARACTERS_SUCCESS:
      return {
        ...state,
        favourites: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case actionTypes.UPDATE_FAVOURITE_CHARACTERS_ERROR:
      return {
        ...state,
        favourites: {
          isLoading: false,
          data: [],
          error: action.payload,
        },
      };
    default: return state;
  }
};

export default charactersReducer;
