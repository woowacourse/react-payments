import { Suspense, lazy } from 'react';

const Loadable = Component => props =>
  (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );

const CardAddPage = Loadable(lazy(() => import('./pages/CardAdd')));
const CardAddCompletePage = Loadable(lazy(() => import('./pages/CardAddComplete')));
const CardListPage = Loadable(lazy(() => import('./pages/CardList')));

const routes = [
  {
    path: '/',
    element: <CardAddPage />,
  },
  {
    path: 'card-add-complete',
    element: <CardAddCompletePage />,
  },
  {
    path: 'card-list',
    element: <CardListPage />,
  },
];

export default routes;
