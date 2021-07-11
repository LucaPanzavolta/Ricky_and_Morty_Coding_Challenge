import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
    </Switch>
  );
}

export default Routes;
