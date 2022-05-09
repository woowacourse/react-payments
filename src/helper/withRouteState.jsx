import React from 'react';
import { useLocation } from 'react-router-dom';
import ErrorPage from '../pages/404';
function withRouteState(Component) {
  const UseRouteStateComponent = props => {
    const { state } = useLocation();

    if (!state) {
      return <ErrorPage />;
    }

    return <Component routeState={state} {...props} />;
  };

  return UseRouteStateComponent;
}

export default withRouteState;
