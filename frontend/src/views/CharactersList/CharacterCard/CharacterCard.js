import React from 'react';
import './CharacterCard.scss';
import PropTypes from 'prop-types';

function CharacterCard({ character, classes = '', onClick = () => { } }) {
  const {
    image, name, species, status, origin, location,
  } = character;

  return (
    // eslint-disable-next-line
    <div className={`character-card ${classes}`} onClick={onClick}>
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
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
};

CharacterCard.defaultProps = {
  classes: '',
};

export default CharacterCard;
