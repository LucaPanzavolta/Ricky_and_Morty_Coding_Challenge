import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header({ isAuthenticated }) {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <header className="layout__header">
      {/* eslint-disable-next-line */}
      <span role="button" className="logo" onClick={() => history.push('/')}>
        <img className="logo__icon" alt="logo" src="/rick_logo.png" />
        Ricky&Morty
      </span>

      {/* eslint-disable-next-line */}
      { isAuthenticated && <span role="button" className="logout" onClick={handleLogout}>Logout</span>}
    </header>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
