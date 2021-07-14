import React from 'react';
import { useHistory } from 'react-router-dom';

/* eslint-disable */

function Header() {
  const history = useHistory();

  return (
    <header className="layout__header">
      <span role="button" className="logo" onClick={() => history.push('/')}>
        <img className="logo__icon" src={"./rick_logo.png"} />
        Ricky&Morty
      </span>
    </header>
  );
}

export default Header;
