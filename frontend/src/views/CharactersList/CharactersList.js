import React from 'react';
import { useHistory } from 'react-router-dom';
import CharacterCard from './CharacterCard/CharacterCard';
import useGetCharacters from '../../hooks/useGetCharacters.hook';
import './CharactersList.scss';

function CharactersList() {
  const characters = useGetCharacters();
  const history = useHistory();

  const handleCardClick = (characterId) => {
    history.push(`/${characterId}`);
  };

  return (
    <div className="characterList__container">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onClick={() => handleCardClick(character.id)}
        />
      ))}
    </div>
  );
}

export default CharactersList;
