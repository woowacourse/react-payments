import CardAddPage from 'page/cardAdd';
import CardListPage from 'page/cardList';

const routes = [
  { path: '/add', element: <CardAddPage /> },
  { path: '/', element: <CardListPage /> },
];

export default routes;
