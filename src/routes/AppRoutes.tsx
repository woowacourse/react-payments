import { Routes, Route } from 'react-router';

import { routes } from './routes';

export const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route path={route.path} element={route.element}>
            {route.children &&
              route.children.map((r) => {
                return <Route {...(r.path === '' ? { index: true } : { path: r.path })} element={r.element} />;
              })}
          </Route>
        );
      })}
    </Routes>
  );
};
