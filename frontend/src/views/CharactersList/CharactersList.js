import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CharacterCard from './CharacterCard/CharacterCard';
import getAllCharactersThunk from '../../redux/thunks/getAllCharacters.thunk';
import './CharactersList.scss';

function CharactersList() {
  const characters = useSelector((state) => state.characters.list.data);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllCharactersThunk());
  }, []);

  const handleCardClick = (characterId) => {
    history.push(`/${characterId}`);
  };

  return (
    <div className="characterList__container">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          {...character} // eslint-disable-line
          onClick={() => handleCardClick(character.id)}
        />
      ))}
    </div>
  );
}

export default CharactersList;
