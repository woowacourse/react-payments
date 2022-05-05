import CardAddUpdatePage from 'page/cardAddUpdate';
import CardListPage from 'page/cardList';

const routes = [
  { path: '/', element: <CardListPage /> },
  { path: '/modify/:cardId', element: <CardAddUpdatePage /> },
  { path: '/add', element: <CardAddUpdatePage /> },
];

export default routes;
