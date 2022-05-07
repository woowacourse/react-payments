import React from 'react';
import { useLocation } from 'react-router-dom';
import ErrorPage from '../../../pages/404';
import PropTypes from 'prop-types';

function RequiredRouteState({ children }) {
  const { state } = useLocation();

  if (!state) {
    return <ErrorPage />;
  }

  return React.cloneElement(children, { routeState: state });
}

RequiredRouteState.propTypes = {
  children: PropTypes.node,
};

export default RequiredRouteState;
