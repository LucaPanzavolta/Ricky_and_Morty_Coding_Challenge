import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../../CharactersList/CharacterCard/CharacterCard';
import FavouriteButton from '../FavouriteButton/FavouriteButton';

function CharacterDetailCard({
  classes = '',
  isCharacterInFavourites,
  onAddToFavourites,
  onRemoveFromFavourites,
  character,
}) {
  return (
    <>
      <FavouriteButton
        character={character}
        isCharacterInFavourites={isCharacterInFavourites}
        onAddToFavourites={onAddToFavourites}
        onRemoveFromFavourites={onRemoveFromFavourites}
      />
      <CharacterCard
        character={character}
        classes={classes}
      />
    </>
  );
}

CharacterDetailCard.propTypes = {
  classes: PropTypes.string.isRequired,
  isCharacterInFavourites: PropTypes.bool.isRequired,
  onAddToFavourites: PropTypes.func.isRequired,
  onRemoveFromFavourites: PropTypes.func.isRequired,
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CharacterDetailCard;
