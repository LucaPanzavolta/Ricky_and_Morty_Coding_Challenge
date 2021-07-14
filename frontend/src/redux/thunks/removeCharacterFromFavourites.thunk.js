import * as actionTypes from '../actions/actionTypes';
import CharacterService from '../../services/character.service';

const removeCharacterFromFavouritesThunk = (characterId) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_FAVOURITE_CHARACTERS_REQUEST });

  CharacterService.removeCharacterFromFavourites(characterId)
    .then(({ data }) => {
      dispatch({ type: actionTypes.UPDATE_FAVOURITE_CHARACTERS_SUCCESS, payload: data.favourites });
    }).catch((err) => {
      dispatch({ type: actionTypes.UPDATE_FAVOURITE_CHARACTERS_ERROR, payload: err });
    });
};

export default removeCharacterFromFavouritesThunk;
