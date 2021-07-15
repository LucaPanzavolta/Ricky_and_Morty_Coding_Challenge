import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

/* eslint-disable no-alert, react/jsx-props-no-spreading */

function ProtectedRoute({
  component: Component, isAuthenticated, redirectTo, ...restOfProps
}) {
  return (
    <Route
      {...restOfProps}
      render={
        (props) => (isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />)
      }
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default ProtectedRoute;
