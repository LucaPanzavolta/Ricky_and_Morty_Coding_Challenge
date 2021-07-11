import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../views/SignUp/SignUp';
import SignIn from '../views/SignIn/SignIn';

function HomeRoute() {
  return (
    <div>
      Home Route
    </div>
  );
}

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomeRoute} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  );
}

export default Routes;
