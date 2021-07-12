import AuthenticatedClient from './AuthenticatedClient';
import ApiUrls from '../constants/apiUrls.constants';

const CharacterService = {
  fetchAllCharacters() {
    return AuthenticatedClient({
      method: 'get',
      url: ApiUrls.getAllCharacters,
    });
  },
};

export default CharacterService;
