import React from 'react';
import './FavouriteButton.scss';
import PropTypes from 'prop-types';

function FavouriteButton({
  character,
  isCharacterInFavourites,
  onAddToFavourites,
  onRemoveFromFavourites,
}) {
  return (
    <div className="favourite-character-btn">
      {
        isCharacterInFavourites
          ? (
            <button
              type="button"
              className="favourite-character-btn__remove"
              onClick={() => onRemoveFromFavourites(character.id)}
            >
              Remove from favourites
            </button>
          )
          : (
            <button
              type="button"
              className="favourite-character-btn__add"
              onClick={() => onAddToFavourites(character.id)}
            >
              Add to favourites

            </button>
          )
      }
    </div>
  );
}

FavouriteButton.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  isCharacterInFavourites: PropTypes.bool.isRequired,
  onAddToFavourites: PropTypes.bool.isRequired,
  onRemoveFromFavourites: PropTypes.bool.isRequired,
};

export default FavouriteButton;
