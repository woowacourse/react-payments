import { Routes, Route } from 'react-router';

import { routes } from './routes';
import type { RouteItem } from './routes';

const renderRoutes = (routes: RouteItem[]) => {
  return routes.map((route) => {
    return (
      <Route path={route.path} element={route.element}>
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
};

export const AppRoutes = () => {
  return <Routes>{renderRoutes(routes)}</Routes>;
};
