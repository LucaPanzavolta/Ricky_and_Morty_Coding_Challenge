import AuthenticatedClient from './AuthenticatedClient';
import ApiUrls from '../constants/apiUrls.constants';

const CharacterService = {
  fetchAllCharacters() {
    return AuthenticatedClient({
      method: 'get',
      url: ApiUrls.getAllCharacters,
    });
  },
  addCharacterToFavourites(characterId) {
    return AuthenticatedClient({
      method: 'post',
      url: `${ApiUrls.favouriteCharacter}/${characterId}`,
    });
  },
  removeCharacterFromFavourites(characterId) {
    return AuthenticatedClient({
      method: 'delete',
      url: `${ApiUrls.favouriteCharacter}/${characterId}`,
    });
  },
};

export default CharacterService;
