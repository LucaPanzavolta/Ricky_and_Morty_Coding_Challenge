import * as actionTypes from '../actions/actionTypes';
import CharacterService from '../../services/character.service';

const getAllCharactersThunk = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_CHARACTERS_REQUEST });

  CharacterService.fetchAllCharacters()
    .then(({ data: characters }) => {
      dispatch({ type: actionTypes.GET_CHARACTERS_SUCCESS, payload: characters });
    }).catch((error) => {
      if (error.response) {
        dispatch({ type: actionTypes.GET_CHARACTERS_ERROR, payload: error.response.data });
      } else {
        dispatch({ type: actionTypes.GET_CHARACTERS_ERROR, payload: error });
      }
    });
};

export default getAllCharactersThunk;
