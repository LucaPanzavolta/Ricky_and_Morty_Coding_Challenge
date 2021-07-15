import React from 'react';
import { useSelector } from 'react-redux';
import Routes from '../../routes/Routes';
import Header from './Header/Header';
import './Layout.scss';

function Layout() {
  const isAuthenticated = useSelector((state) => !!state.authenticatedUser.data);

  return (
    <div>
      <div className="layout">
        <Header isAuthenticated={isAuthenticated} />
        <main className="layout__content">
          <Routes isAuthenticated={isAuthenticated} />
        </main>
      </div>
    </div>
  );
}

export default Layout;
