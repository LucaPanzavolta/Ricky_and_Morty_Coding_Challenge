import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getAllCharactersThunk from '../redux/thunks/getAllCharacters.thunk';

/* eslint-disable implicit-arrow-linebreak */

const findCorrectCharacter = (characters, characterIdToLookFor) =>
  characters.find((char) => char.id === characterIdToLookFor);

function useGetCharacter(characterId) {
  const [character, setCharacter] = useState(null);
  const characters = useSelector((state) => state.characters.list.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const cachedCharacterInRedux = findCorrectCharacter(characters, characterId);

    if (cachedCharacterInRedux) setCharacter(cachedCharacterInRedux);
    else dispatch(getAllCharactersThunk());
  }, [characters, characterId]);

  return character;
}

export default useGetCharacter;
