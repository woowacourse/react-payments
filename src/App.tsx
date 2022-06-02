import { useRoutes } from 'react-router-dom';

import Layout from 'components/common/Layout';
import CardListPage from 'page/cardList';
import CardAddUpdatePage from 'page/cardAddUpdate';
import NotFoundPage from 'page/notFound';
import cardInfoProvider from 'context/cardInfoProvider';

const routes = [
  { path: '/react-payments', element: <CardListPage /> },
  { path: '/react-payments/add', element: <CardAddUpdatePage /> },
  { path: '/react-payments/modify/:cardId', element: <CardAddUpdatePage /> },
  { path: '/*', element: <NotFoundPage /> },
];

const App = () => {
  const { CardInfoContext, value } = cardInfoProvider();
  const route = useRoutes(routes);

  return (
    <Layout>
      <CardInfoContext.Provider value={value}>{route}</CardInfoContext.Provider>
    </Layout>
  );
};

export default App;
