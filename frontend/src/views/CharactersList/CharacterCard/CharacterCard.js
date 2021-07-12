import React from 'react';
import './CharacterCard.scss';
import PropTypes from 'prop-types';

function CharacterCard({
  image, name, species, status, origin, location, onClick,
}) {
  return (
    // eslint-disable-next-line
    <div className="character-card" onClick={onClick}>
      <div className="character-card__avatar" style={{ backgroundImage: `url(${image})` }} />
      <div className="character-card__data">
        <p className="character-card__name">{name}</p>
        <p className="character-card__status">
          {status === 'Alive' && <span className="alive" />}
          {status === 'Dead' && <span className="dead" />}
          {status === 'unknown' && <span className="unknown" />}
          {status}
          {' - '}
          {species}
        </p>
        <p className="label">Planet of origin:</p>
        <p className="character-card__origin">{origin.name}</p>
        <p className="label">Last seen at:</p>
        <p className="character__location">{location.name}</p>
      </div>
    </div>
  );
}

CharacterCard.propTypes = {
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
  onClick: PropTypes.func.isRequired,
};

export default CharacterCard;
