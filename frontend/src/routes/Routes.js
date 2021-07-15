import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignUp from '../views/SignUp/SignUp';
import SignIn from '../views/SignIn/SignIn';
import CharactersList from '../views/CharactersList/CharactersList';
import CharacterDetail from '../views/CharacterDetail/CharacterDetail';
import ProtectedRoute from './ProtectedRoute';

function Routes({ isAuthenticated }) {
  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />

      <ProtectedRoute isAuthenticated={isAuthenticated} path="/" exact component={CharactersList} redirectTo="/signin" />
      <ProtectedRoute isAuthenticated={isAuthenticated} path="/:characterId" exact component={CharacterDetail} redirectTo="/signin" />
    </Switch>
  );
}

Routes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Routes;
