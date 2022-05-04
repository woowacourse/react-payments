import CardAddPage from 'page/cardAdd';
import CardAddConfirmPage from 'page/cardAddConfirm';
import CardListPage from 'page/cardList';

const routes = [
  { path: 'add', element: <CardAddPage /> },
  { path: 'confirm', element: <CardAddConfirmPage /> },
  { path: '', element: <CardListPage /> },
];

export default routes;
