import { useRoutes } from 'react-router-dom';

import Layout from 'components/common/Layout';
import CardListPage from 'page/cardList';
import CardAddUpdatePage from 'page/cardAddUpdate';
import NotFoundPage from 'page/noutFound';

const routes = [
  { path: '/', element: <CardListPage /> },
  { path: '/add', element: <CardAddUpdatePage /> },
  { path: '/modify/:cardId', element: <CardAddUpdatePage /> },
  { path: '*', element: <NotFoundPage /> },
];

const App = () => {
  const route = useRoutes(routes);

  return <Layout>{route}</Layout>;
};

export default App;
