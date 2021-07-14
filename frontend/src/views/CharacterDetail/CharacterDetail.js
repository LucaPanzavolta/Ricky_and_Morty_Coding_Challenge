import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import addCharacterToFavouritesThunk from '../../redux/thunks/addCharacterToFavourites.thunk';
import removeCharacterFromFavouritesThunk from '../../redux/thunks/removeCharacterFromFavourites.thunk';
import useGetCharacter from '../../hooks/useGetCharacter.hook';
import CharacterDetailCard from './CharacterDetailCard/CharacterDetailCard';

function CharacterDetail() {
  const { characterId: characterIdString } = useParams();
  const characterId = parseInt(characterIdString, 10);
  const character = useGetCharacter(characterId);
  const favouriteCharacters = useSelector((state) => state.characters.favourites.data);
  const dispatch = useDispatch();

  const isCharacterInFavourites = (() => favouriteCharacters.includes(characterId))();

  const handleAddToFavourites = (charId) => {
    dispatch(addCharacterToFavouritesThunk(`${charId}`));
  };

  const handleRemoveFromFavourites = (charId) => {
    dispatch(removeCharacterFromFavouritesThunk(charId));
  };

  return (
    <>
      { character && (
        <CharacterDetailCard
          character={character}
          isCharacterInFavourites={isCharacterInFavourites}
          classes="character-card--detail"
          onRemoveFromFavourites={handleRemoveFromFavourites}
          onAddToFavourites={handleAddToFavourites}
        />
      )}
    </>
  );
}

export default CharacterDetail;
