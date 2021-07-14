import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignUp from '../views/SignUp/SignUp';
import SignIn from '../views/SignIn/SignIn';
import CharactersList from '../views/CharactersList/CharactersList';
import CharacterDetail from '../views/CharacterDetail/CharacterDetail';
import ProtectedRoute from './ProtectedRoute';

function Routes() {
  const isAuthenticated = useSelector((state) => state.authenticatedUser.data);

  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />

      <ProtectedRoute isAuthenticated={isAuthenticated} path="/" exact component={CharactersList} redirectTo="/signin" />
      <ProtectedRoute isAuthenticated={isAuthenticated} path="/:characterId" exact component={CharacterDetail} redirectTo="/signin" />
    </Switch>
  );
}

export default Routes;
