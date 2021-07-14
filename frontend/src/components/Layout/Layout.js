import React from 'react';
import Routes from '../../routes/Routes';
import Header from './Header/Header';
import './Layout.scss';

function Layout() {
  return (
    <div>
      <div className="layout">
        <Header />
        <main className="layout__content">
          <Routes />
        </main>
      </div>
    </div>
  );
}

export default Layout;
