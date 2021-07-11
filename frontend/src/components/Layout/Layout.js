import React from 'react';
import Routes from '../../routes/Routes';
import './Layout.scss';

function Layout() {
  return (
    <div>
      <div className="layout">
        <header className="layout__header">Ricky&Morty</header>
        <main className="layout__content">
          <Routes />
        </main>
      </div>
    </div>
  );
}

export default Layout;
